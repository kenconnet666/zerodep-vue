import { transformSync } from '@babel/core';
import compiler from '@zerodep-vue/compiler';
import vueTsx from '@zerodep-vue/compiler/vite';
import type { CompilerOptions } from '@zerodep-vue/compiler';
import type { ViteOptions } from '@zerodep-vue/compiler/vite';

const options: CompilerOptions = { optimize: true, mergeProps: true, zerodep: { css: true } };
const vite: ViteOptions = { ...options, include: /\.tsx$/, babelPlugins: [] };
vueTsx(vite);
transformSync('const view=<div/>', { plugins: [[compiler, options]] });
// @ts-expect-error 发布的编译器选项仍保留准确值域。
const invalid: CompilerOptions = { optimize: 'enabled' };
void invalid;
