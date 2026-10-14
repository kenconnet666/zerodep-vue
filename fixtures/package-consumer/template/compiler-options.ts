import { transformSync } from '@babel/core';
import { babelPlugin as compiler, vitePlugin as vueTsx } from '@zerodep-vue/compiler';

import type { CompilerOptions, ViteOptions } from '@zerodep-vue/compiler';

const options: CompilerOptions = { optimize: true, mergeProps: true, zerodep: { css: true } };
const vite: ViteOptions = { ...options, include: /\.tsx$/, babelPlugins: [] };
vueTsx(vite);
transformSync('const view=<div/>', { plugins: [[compiler, options]] });
// @ts-expect-error 发布的编译器选项仍保留准确值域。
const invalid: CompilerOptions = { optimize: 'enabled' };
void invalid;
