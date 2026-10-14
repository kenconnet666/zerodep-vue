import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';
import { outsideDirectory } from './path-boundary.mjs';

test('consumer boundary handles Windows drives and sibling-prefix directories', () => {
  assert(outsideDirectory('D:\\a\\repo', 'C:\\Temp\\consumer', path.win32));
  assert(outsideDirectory('D:\\a\\repo', 'D:\\a\\repo-copy', path.win32));
  assert(!outsideDirectory('D:\\a\\repo', 'D:\\a\\repo\\tmp', path.win32));
  assert(!outsideDirectory('/work/repo', '/work/repo', path.posix));
  assert(outsideDirectory('/work/repo', '/tmp/consumer', path.posix));
});
