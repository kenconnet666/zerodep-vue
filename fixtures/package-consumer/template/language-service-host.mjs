import { existsSync, readFileSync } from 'node:fs';

/** 使用当前消费者的 TS SDK；realpath 使 pnpm 链接后的传递依赖从真实包目录解析。 */
export function languageServiceHost(ts, directory, files, options) {
  return {
    getScriptFileNames: () => files,
    getScriptVersion: () => '0',
    getScriptSnapshot: (file) =>
      existsSync(file) ? ts.ScriptSnapshot.fromString(readFileSync(file, 'utf8')) : undefined,
    getCurrentDirectory: () => directory,
    getCompilationSettings: () => options,
    getDefaultLibFileName: (value) => ts.getDefaultLibFilePath(value),
    fileExists: ts.sys.fileExists,
    readFile: ts.sys.readFile,
    readDirectory: ts.sys.readDirectory,
    directoryExists: ts.sys.directoryExists,
    getDirectories: ts.sys.getDirectories,
    realpath: ts.sys.realpath,
    useCaseSensitiveFileNames: () => ts.sys.useCaseSensitiveFileNames,
  };
}
