/**
 * 字面量说明只增强编辑体验：读取当前 Program 的真实声明，不改变诊断或编译结果。
 * 使用宿主注入的 TypeScript，避免编辑器与插件各自加载不同版本。
 */
module.exports = function init({ typescript: ts }) {
  return {
    create(info) {
      const service = info.languageService;
      const proxy = Object.create(null);
      for (const name of Object.keys(service)) {
        const member = service[name];
        proxy[name] = typeof member === 'function' ? member.bind(service) : member;
      }

      const transparent = (node) =>
        ts.isParenthesizedExpression(node) ||
        ts.isAsExpression(node) ||
        ts.isTypeAssertionExpression(node) ||
        ts.isSatisfiesExpression(node) ||
        ts.isNonNullExpression(node);

      // 只跟随真实导入和 const 别名；同名函数或声明为 typeof bx 的业务函数不算 bx。
      function isBindingCall(checker, expression, valuesFile, seen = new Set()) {
        if (transparent(expression))
          return isBindingCall(checker, expression.expression, valuesFile, seen);
        let symbol = checker.getSymbolAtLocation(expression);
        if (!symbol || seen.has(symbol)) return false;
        seen.add(symbol);
        if (symbol.flags & ts.SymbolFlags.Alias) symbol = checker.getAliasedSymbol(symbol);
        return (symbol.declarations ?? []).some((declaration) => {
          if (ts.isFunctionDeclaration(declaration))
            return declaration.name?.text === 'bx' && declaration.getSourceFile() === valuesFile;
          return (
            ts.isVariableDeclaration(declaration) &&
            declaration.initializer &&
            declaration.parent.flags & ts.NodeFlags.Const &&
            isBindingCall(checker, declaration.initializer, valuesFile, seen)
          );
        });
      }

      function context(fileName, position) {
        const program = service.getProgram();
        const source = program?.getSourceFile(fileName);
        if (!source) return;
        let literal;
        function visit(node) {
          if (position < node.getStart(source) || position > node.end) return;
          if (
            (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) &&
            (position < node.end || node.isUnterminated)
          )
            literal = node;
          ts.forEachChild(node, visit);
        }
        visit(source);
        if (!literal || position <= literal.getStart(source)) return;
        // 包装表达式和条件的结果分支仍属于同一属性；条件本身、任意函数和字符串拼接不属于。
        let value = literal;
        const calls = [];
        while (value.parent) {
          const parent = value.parent;
          if (transparent(parent) && parent.expression === value) value = parent;
          else if (
            ts.isConditionalExpression(parent) &&
            (parent.whenTrue === value || parent.whenFalse === value)
          )
            value = parent;
          else if (
            ts.isCallExpression(parent) &&
            parent.arguments.length === 1 &&
            parent.arguments[0] === value
          ) {
            calls.push(parent.expression);
            value = parent;
          } else break;
        }
        const assignment = value.parent;
        if (
          !ts.isPropertyAssignment(assignment) ||
          assignment.initializer !== value ||
          !ts.isObjectLiteralExpression(assignment.parent)
        )
          return;
        const property = assignment.name;
        if (!ts.isIdentifier(property) && !ts.isStringLiteral(property)) return;
        const checker = program.getTypeChecker();
        const contextual = checker.getContextualType(assignment.parent);
        if (!contextual) return;
        for (const type of contextual.isUnion() ? contextual.types : [contextual]) {
          const symbol = checker.getPropertyOfType(type, property.text);
          for (const declaration of symbol?.declarations ?? []) {
            const declared = declaration.type;
            if (
              !declared ||
              !ts.isTypeReferenceNode(declared) ||
              declared.typeName.getText() !== 'PropertyValue' ||
              !declared.typeArguments?.[0] ||
              !ts.isLiteralTypeNode(declared.typeArguments[0]) ||
              declared.typeArguments[0].literal.text !== property.text
            )
              continue;
            const origin = declaration.getSourceFile().fileName.replaceAll('\\', '/');
            if (!/\/generated\/properties(\.d)?\.ts$/.test(origin)) continue;
            const bindingFile = program.getSourceFile(
              origin.replace(/generated\/properties(\.d)?\.ts$/, 'bindings$1.ts'),
            );
            if (calls.some((call) => !isBindingCall(checker, call, bindingFile))) continue;
            const valuesFile = program.getSourceFile(
              origin.replace(/properties(\.d)?\.ts$/, 'literal-values$1.ts'),
            );
            const dictionary = valuesFile?.statements.find(
              (node) => ts.isInterfaceDeclaration(node) && node.name.text === 'KeywordValues',
            );
            const member = dictionary?.members.find(
              (node) => node.name?.getText(valuesFile) === property.text,
            );
            const keyType =
              member?.type &&
              (ts.isUnionTypeNode(member.type) ? member.type.types : [member.type]).find(
                (node) =>
                  ts.isTypeOperatorNode(node) && node.operator === ts.SyntaxKind.KeyOfKeyword,
              );
            if (!keyType) continue;
            return {
              checker,
              literal,
              values: checker.getTypeFromTypeNode(keyType.type),
              span: {
                start: literal.getStart(source) + 1,
                length: Math.max(0, literal.getWidth(source) - (literal.isUnterminated ? 1 : 2)),
              },
            };
          }
        }
      }

      function keyword(fileName, position, name) {
        const ctx = context(fileName, position);
        if (!ctx) return;
        const value = name ?? ctx.literal.text;
        const symbol = ctx.checker.getPropertyOfType(ctx.values, value);
        const declaration = symbol?.declarations?.find((node) => ts.isPropertySignature(node));
        if (!symbol || !declaration) return;
        const container = declaration.parent.name?.text ?? 'CSS';
        const member = /^[a-zA-Z_$][\w$]*$/.test(symbol.name)
          ? '.' + symbol.name
          : '[' + JSON.stringify(symbol.name) + ']';
        return {
          ...ctx,
          symbol,
          documentation: symbol.getDocumentationComment(ctx.checker),
          tags: symbol.getJsDocTags(ctx.checker),
          displayParts: [{ text: `${container}${member}: ${JSON.stringify(value)}`, kind: 'text' }],
          definition: {
            fileName: declaration.getSourceFile().fileName,
            textSpan: { start: declaration.name.getStart(), length: declaration.name.getWidth() },
            kind: ts.ScriptElementKind.memberVariableElement,
            name: symbol.name,
            containerKind: ts.ScriptElementKind.interfaceElement,
            containerName: container,
          },
        };
      }

      proxy.getCompletionsAtPosition = (fileName, position, ...rest) => {
        const prior = service.getCompletionsAtPosition(fileName, position, ...rest);
        const ctx = context(fileName, position);
        if (!ctx) return prior;
        // bx 的泛型和 as const 等写法可能没有原生候选；仅在确认的 CSS 上下文补齐属性值。
        const names = new Set(prior?.entries.map((entry) => entry.name));
        const entries = ctx.checker
          .getPropertiesOfType(ctx.values)
          .filter((symbol) => !names.has(symbol.name))
          .map((symbol) => ({
            name: symbol.name,
            kind: ts.ScriptElementKind.string,
            kindModifiers: '',
            sortText: '11',
          }));
        return {
          isGlobalCompletion: false,
          isMemberCompletion: false,
          isNewIdentifierLocation: false,
          ...prior,
          entries: [...(prior?.entries ?? []), ...entries],
        };
      };

      proxy.getQuickInfoAtPosition = (fileName, position) => {
        const match = keyword(fileName, position);
        return match
          ? {
              kind: ts.ScriptElementKind.memberVariableElement,
              kindModifiers: 'readonly',
              textSpan: match.span,
              displayParts: match.displayParts,
              documentation: match.documentation,
              tags: match.tags,
            }
          : service.getQuickInfoAtPosition(fileName, position);
      };
      proxy.getCompletionEntryDetails = (fileName, position, name, ...rest) => {
        const prior = service.getCompletionEntryDetails(fileName, position, name, ...rest);
        const match = keyword(fileName, position, name);
        return match
          ? {
              ...prior,
              name,
              kind: ts.ScriptElementKind.memberVariableElement,
              kindModifiers: 'readonly',
              displayParts: match.displayParts,
              documentation: match.documentation,
              tags: match.tags,
            }
          : prior;
      };
      proxy.getDefinitionAtPosition = (fileName, position) => {
        const match = keyword(fileName, position);
        return match ? [match.definition] : service.getDefinitionAtPosition(fileName, position);
      };
      proxy.getDefinitionAndBoundSpan = (fileName, position) => {
        const match = keyword(fileName, position);
        return match
          ? { textSpan: match.span, definitions: [match.definition] }
          : service.getDefinitionAndBoundSpan(fileName, position);
      };
      return proxy;
    },
  };
};
