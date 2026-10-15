import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const directory = dirname(fileURLToPath(import.meta.url));
export const root = resolve(process.argv[2] ?? resolve(directory, '../..'));
export const requireProject = createRequire(resolve(root, 'package.json'));
