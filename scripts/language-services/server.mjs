import { readFile, realpath } from 'node:fs/promises';
import { extname, isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { requireProject, root as configuredRoot } from './environment.mjs';
import { service, closeService } from './language-client.mjs';

const { McpServer } = requireProject('@modelcontextprotocol/sdk/server/mcp.js');
const { StdioServerTransport } = requireProject('@modelcontextprotocol/sdk/server/stdio.js');
const { z } = requireProject('zod/v3');
const root = await realpath(configuredRoot);
// 扩展名和 LSP languageId 在同一处维护，不能只增加允许读取的后缀而漏掉语言分类。
const languages = new Map([
  ['.ts', 'typescript'],
  ['.tsx', 'typescriptreact'],
  ['.mts', 'typescript'],
  ['.cts', 'typescript'],
  ['.js', 'javascript'],
  ['.jsx', 'javascriptreact'],
  ['.mjs', 'javascript'],
  ['.cjs', 'javascript'],
]);

async function document(filePath) {
  const absolute = await realpath(resolve(root, filePath));
  const fromRoot = relative(root, absolute);
  if (isAbsolute(fromRoot) || fromRoot === '..' || fromRoot.startsWith('..' + sep))
    throw new Error('File is outside the configured workspace.');
  const extension = extname(absolute);
  const languageId = languages.get(extension);
  if (!languageId) throw new Error('Unsupported source file extension: ' + extension);
  return {
    path: absolute,
    relativePath: fromRoot,
    uri: pathToFileURL(absolute).href,
    text: await readFile(absolute, 'utf8'),
    languageId,
  };
}

function range(value) {
  return (
    value && {
      start: { line: value.start.line + 1, column: value.start.character + 1 },
      end: { line: value.end.line + 1, column: value.end.character + 1 },
    }
  );
}

function position(doc, line, column) {
  const lines = doc.text.split(/\r?\n/u);
  if (line > lines.length || column > lines[line - 1].length + 1)
    throw new Error('Position is outside the document.');
  return { line: line - 1, character: column - 1 };
}

function offsetPosition(text, offset) {
  const before = text.slice(0, offset);
  return { line: before.split('\n').length, column: offset - before.lastIndexOf('\n') };
}

const server = new McpServer({ name: 'zerodep-vue-language-services', version: '0.0.0' });
const file = { filePath: z.string().describe('Project-relative source path inside ' + root) };
const location = { ...file, line: z.number().int().min(1), column: z.number().int().min(1) };

function tool(name, description, inputSchema, read) {
  server.registerTool(
    name,
    {
      description,
      inputSchema,
      annotations: { readOnlyHint: true, destructiveHint: false, openWorldHint: false },
    },
    async (args) => {
      try {
        const doc = await document(args.filePath);
        const language = await service();
        const result = await language.run(doc, (version) => read(args, doc, language, version));
        return { content: [{ type: 'text', text: JSON.stringify(result) }] };
      } catch (error) {
        return { isError: true, content: [{ type: 'text', text: String(error) }] };
      }
    },
  );
}

tool(
  'hover',
  'Get TypeScript 6.0.3 type information. Positions are 1-based UTF-16.',
  location,
  async (args, doc, language) => {
    const result = await language.request('textDocument/hover', {
      textDocument: { uri: doc.uri },
      position: position(doc, args.line, args.column),
    });
    return {
      filePath: doc.relativePath,
      contents: result?.contents ?? null,
      range: range(result?.range),
    };
  },
);

for (const [name, method] of [
  ['definitions', 'textDocument/definition'],
  ['references', 'textDocument/references'],
]) {
  tool(
    name,
    'Find ' + name + ' with the workspace TypeScript service. Positions are 1-based.',
    { ...location, limit: z.number().int().min(1).max(500).default(100) },
    async (args, doc, language) => {
      const result = await language.request(method, {
        textDocument: { uri: doc.uri },
        position: position(doc, args.line, args.column),
        context: { includeDeclaration: true },
      });
      const items = result == null ? [] : Array.isArray(result) ? result : [result];
      return {
        total: items.length,
        items: items.slice(0, args.limit).map((item) => {
          const uri = item.targetUri ?? item.uri;
          return {
            filePath: uri.startsWith('file:') ? fileURLToPath(uri) : uri,
            range: range(item.targetSelectionRange ?? item.range),
          };
        }),
      };
    },
  );
}

tool(
  'completions',
  'Get TS/TSX completions; optionally resolve details. Positions are 1-based.',
  {
    ...location,
    prefix: z.string().default(''),
    limit: z.number().int().min(1).max(200).default(40),
    resolveLimit: z.number().int().min(0).max(20).default(0),
  },
  async (args, doc, language) => {
    const result = await language.request('textDocument/completion', {
      textDocument: { uri: doc.uri },
      position: position(doc, args.line, args.column),
    });
    const items = (Array.isArray(result) ? result : (result?.items ?? [])).filter((item) =>
      item.label.startsWith(args.prefix),
    );
    const selected = items.slice(0, args.limit);
    if (language.capabilities.completionProvider?.resolveProvider) {
      for (let i = 0; i < Math.min(args.resolveLimit, selected.length); i++)
        selected[i] = {
          ...selected[i],
          ...(await language.request('completionItem/resolve', selected[i])),
        };
    }
    return {
      total: items.length,
      editPositions: 'LSP zero-based UTF-16',
      isIncomplete: !Array.isArray(result) && Boolean(result?.isIncomplete),
      itemDefaults: !Array.isArray(result) ? result?.itemDefaults : undefined,
      items: selected,
    };
  },
);

tool(
  'diagnostics',
  'Get completed syntax and semantic diagnostics for one TS/TSX file using TypeScript 6.0.3. A timeout is an error, never a clean result. Build/config checks remain separate.',
  file,
  async (_args, doc, language, version) => {
    const results = await Promise.all(
      ['syntacticDiagnosticsSync', 'semanticDiagnosticsSync'].map((command) =>
        language.request('workspace/executeCommand', {
          command: 'typescript.tsserverRequest',
          arguments: [
            command,
            { file: doc.uri, includeLinePosition: true },
            { executionTarget: 0 },
          ],
        }),
      ),
    );
    const diagnostics = results.flatMap((result) => {
      if (!result?.success || !Array.isArray(result.body))
        throw new Error('TypeScript did not complete its diagnostic request.');
      return result.body.map((item) => ({
        code: item.code,
        severity: item.category === 'error' ? 1 : 2,
        message: item.text ?? item.message ?? item.messageText,
        range: {
          start: item.startLocation
            ? { line: item.startLocation.line, column: item.startLocation.offset }
            : offsetPosition(doc.text, item.start),
          end: item.endLocation
            ? { line: item.endLocation.line, column: item.endLocation.offset }
            : offsetPosition(doc.text, item.start + item.length),
        },
        source: 'typescript',
      }));
    });
    return {
      filePath: doc.relativePath,
      language: doc.languageId,
      typescript: language.version,
      documentVersion: version,
      complete: true,
      errors: diagnostics.filter((item) => item.severity === 1).length,
      diagnostics,
    };
  },
);

let closing = false;
async function close() {
  if (closing) return;
  closing = true;
  await closeService();
  await server.close();
  process.exit(0);
}
process.stdin.on('end', () => void close());
process.on('SIGINT', () => void close());
process.on('SIGTERM', () => void close());
await server.connect(new StdioServerTransport());
