import { connect } from './mcp-client.mjs';

const files = process.argv.slice(3);
if (!files.length) throw new Error('Usage: pnpm lsp:inspect <source-file> [source-file...]');
const connection = await connect();
try {
  for (const filePath of files) {
    const report = await connection.call('diagnostics', { filePath });
    if (!report.complete) throw new Error('Incomplete diagnostics: ' + filePath);
    console.log(JSON.stringify(report));
    if (report.errors) process.exitCode = 2;
  }
} catch (error) {
  console.error(connection.log);
  console.error(error);
  process.exitCode = 1;
} finally {
  await connection.close();
}
