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
        const checker = program.getTypeChecker();
        // 由真实方法声明定位属性，不按变量名 s 或方法文本猜测，普通业务方法不受影响。
        for (const call of calls) {
          const declaration = checker.getResolvedSignature(call.parent)?.declaration;
          const property = declaration?.name?.text;
          if (!property) continue;
          const origin = declaration.getSourceFile().fileName.replaceAll('\\', '/');
          if (!/\/generated\/author(\.d)?\.ts$/.test(origin)) continue;
          const bindingFile = program.getSourceFile(
            origin.replace(/generated\/author(\.d)?\.ts$/, 'bindings$1.ts'),
          );
          if (
            calls
              .slice(0, calls.indexOf(call))
              .some((item) => !isBindingCall(checker, item, bindingFile))
          )
            continue;
          const valuesFile = program.getSourceFile(
            origin.replace(/author(\.d)?\.ts$/, 'literal-values$1.ts'),
          );
          const dictionary = valuesFile?.statements.find(
            (node) => ts.isInterfaceDeclaration(node) && node.name.text === 'KeywordValues',
          );
          const member = dictionary?.members.find(
            (node) => node.name?.getText(valuesFile) === property,
          );
          const keyType =
            member?.type &&
            (ts.isUnionTypeNode(member.type) ? member.type.types : [member.type]).find(
              (node) => ts.isTypeOperatorNode(node) && node.operator === ts.SyntaxKind.KeyOfKeyword,
            );
          if (!keyType) continue;
          const values = checker.getTypeFromTypeNode(keyType.type);
          const themeMembers = new Map();
          const receiver =
            (ts.isPropertyAccessExpression(call) || ts.isElementAccessExpression(call)) &&
            call.expression;
          // 私有字段的类型不会进入 .d.ts；直接读取公开 Css<T> 的主题参数。
          const author = receiver && checker.getApparentType(checker.getTypeAtLocation(receiver));
          const theme = author && checker.getTypeArguments(author)[0];
          if (theme) {
            const properties = [property];
            if (
              property !== 'color' &&
              checker.getPropertyOfType(values, 'red') &&
              checker.getPropertyOfType(values, 'blue')
            )
              properties.push('color');
            for (const name of properties) {
              const group = checker.getTypeOfPropertyOfType(theme, name);
              if (!group) continue;
              for (const symbol of checker.getPropertiesOfType(group))
                if (symbol.name.startsWith('_') && !themeMembers.has(symbol.name))
                  themeMembers.set(symbol.name, symbol);
            }
          }
          return {
            checker,
            literal,
            values,
            themeMembers,
            span: {
              start: literal.getStart(source) + 1,
              length: Math.max(0, literal.getWidth(source) - (literal.isUnterminated ? 1 : 2)),
            },
          };
        }
      }

      function keyword(fileName, position, name) {
        const ctx = context(fileName, position);
        if (!ctx) return;
        const value = name ?? ctx.literal.text;
        const symbol =
          ctx.themeMembers.get(value) ?? ctx.checker.getPropertyOfType(ctx.values, value);
        const declaration = symbol?.declarations?.find(
          (node) =>
            ts.isPropertySignature(node) ||
            ts.isPropertyAssignment(node) ||
            ts.isPropertyDeclaration(node),
        );
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

      // 有限指令使用真实 JSX 声明；命名模型和自定义 modifier 回到同一份说明/定义。
      function directive(fileName, position, requested) {
        const program = service.getProgram();
        const source = program?.getSourceFile(fileName);
        if (!source) return;
        let attribute;
        function visit(node) {
          if (position < node.getStart(source) || position > node.end) return;
          if (ts.isJsxAttribute(node) && position <= node.name.end) attribute = node;
          ts.forEachChild(node, visit);
        }
        visit(source);
        if (!attribute) return;
        const name = requested ?? attribute.name.getText(source);
        if (!/^v-(?:model(?:s|_|:|$)|show$|html$|text$|slots$)/.test(name)) return;
        const checker = program.getTypeChecker();
        const type = checker.getContextualType(attribute.parent);
        if (!type) return;
        const model = name.startsWith('v-model:') || name.startsWith('v-model_');
        const tag = attribute.parent.parent.tagName;
        if (name.startsWith('v-model:') && ts.isIdentifier(tag) && /^[a-z]/.test(tag.text)) return;
        const symbol =
          checker.getPropertyOfType(type, name) ??
          (model ? checker.getPropertyOfType(type, 'v-model') : undefined);
        const declaration = symbol?.declarations?.find(
          (node) =>
            ts.isPropertySignature(node) &&
            /\/tsx\/directives(\.d)?\.ts$/.test(
              node.getSourceFile().fileName.replaceAll('\\', '/'),
            ),
        );
        if (!symbol || !declaration) return;
        return {
          name,
          type,
          checker,
          span: { start: attribute.name.getStart(source), length: attribute.name.getWidth(source) },
          documentation: symbol.getDocumentationComment(checker),
          tags: symbol.getJsDocTags(checker),
          definition: {
            fileName: declaration.getSourceFile().fileName,
            textSpan: { start: declaration.name.getStart(), length: declaration.name.getWidth() },
            kind: ts.ScriptElementKind.memberVariableElement,
            name: symbol.name,
            containerKind: ts.ScriptElementKind.interfaceElement,
            containerName: declaration.parent.name.text,
          },
        };
      }

      proxy.getCompletionsAtPosition = (fileName, position, ...rest) => {
        const prior = service.getCompletionsAtPosition(fileName, position, ...rest);
        const attr = directive(fileName, position);
        if (attr?.name.startsWith('v-model:')) {
          const names = new Set(prior?.entries.map((entry) => entry.name));
          const entries = attr.checker
            .getPropertiesOfType(attr.type)
            .filter((symbol) => symbol.name.startsWith('onUpdate:'))
            .map((symbol) => 'v-model:' + symbol.name.slice('onUpdate:'.length))
            .filter((name) => !names.has(name))
            .map((name) => ({
              name,
              insertText: name,
              kind: ts.ScriptElementKind.memberVariableElement,
              kindModifiers: '',
              sortText: '11',
              replacementSpan: attr.span,
            }));
          return {
            isGlobalCompletion: false,
            isMemberCompletion: false,
            isNewIdentifierLocation: false,
            ...prior,
            entries: [...(prior?.entries ?? []), ...entries],
          };
        }
        const ctx = context(fileName, position);
        if (!ctx) return prior;
        // bx 的泛型和 as const 等写法可能没有原生候选；仅在确认的 CSS 上下文补齐属性值。
        const names = new Set(prior?.entries.map((entry) => entry.name));
        const entries = [
          ...ctx.checker.getPropertiesOfType(ctx.values),
          ...ctx.themeMembers.values(),
        ]
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
        const attr = directive(fileName, position);
        if (attr)
          return {
            kind: ts.ScriptElementKind.memberVariableElement,
            kindModifiers: '',
            displayParts: [{ text: `(directive) ${attr.name}`, kind: 'text' }],
            ...service.getQuickInfoAtPosition(fileName, position),
            textSpan: attr.span,
            documentation: attr.documentation,
            tags: attr.tags,
          };
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
        const attr = directive(fileName, position, name);
        if (attr)
          return {
            kind: ts.ScriptElementKind.memberVariableElement,
            kindModifiers: '',
            displayParts: [{ text: `(directive) ${name}`, kind: 'text' }],
            ...prior,
            name,
            documentation: attr.documentation,
            tags: attr.tags,
          };
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
        const attr = directive(fileName, position);
        if (attr) return [attr.definition];
        const match = keyword(fileName, position);
        return match ? [match.definition] : service.getDefinitionAtPosition(fileName, position);
      };
      proxy.getDefinitionAndBoundSpan = (fileName, position) => {
        const attr = directive(fileName, position);
        if (attr) return { textSpan: attr.span, definitions: [attr.definition] };
        const match = keyword(fileName, position);
        return match
          ? { textSpan: match.span, definitions: [match.definition] }
          : service.getDefinitionAndBoundSpan(fileName, position);
      };
      return proxy;
    },
  };
};
