import assert from 'node:assert/strict';
import test from 'node:test';
import { parseAsync } from '@babel/core';
import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { vitePlugin as vueTsx } from '../src/index.ts';
import { resolveClass } from '../../core/src/css/resolve.ts';

async function compile(source, command = 'serve', ssr = false) {
  const plugin = vueTsx();
  plugin.configResolved({
    root: '/project',
    command,
    isProduction: command === 'build',
    build: { sourcemap: true },
    plugins: [],
  });
  return (await plugin.transform(source, '/project/App.tsx', { ssr })).code;
}
const stamp = (code) => code.match(/import\.meta\.hot,\s*"([a-f0-9]{24})"/)?.[1];

test('named setup copies retain HMR and inspection without changing their lexical environment', async () => {
  const source = `import {_component} from '@zerodep-vue/core'; import {ref} from 'vue';
    const label = 'outer';
    function setup(){ const count=ref(1); return <div>{label}:{count.value}</div>; }
    function create(label){ return _component(setup); }
    export const App=create('inner');`;
  for (const command of ['serve', 'build']) {
    const code = await compile(source, command);
    assert.equal(code.includes('.render('), command === 'serve');
    assert.equal(code.includes('enableInspection'), command === 'serve');
    const executable = code
      .replace(
        /(['"])@zerodep-vue\/core\1/g,
        JSON.stringify(new URL('../../core/src/index.ts', import.meta.url).href),
      )
      .replace(/(['"])vue\1/g, JSON.stringify(import.meta.resolve('vue')));
    const { App } = await import(
      'data:text/javascript;base64,' + Buffer.from(executable).toString('base64')
    );
    assert.equal(await renderToString(createSSRApp(App)), '<div>outer:1</div>');
  }
});

test('hot factories preserve for-of and for-in destructuring writes to captured bindings', async () => {
  const source = `import {createCssContext, SystemKeywords} from '@zerodep-vue/core';
    const {useCss} = createCssContext(new SystemKeywords());
    const s = useCss();
    export function sample() {
      let first = 0, tail = [], third = 0, key = '', suffix = '';
      const style = s.width((() => {
        for ([first = 5, ...tail] of [[undefined, 8, 9]]) {}
        for ({value: third = first} of [{}]) {}
        for ([key, ...suffix] in {ab: true}) {}
        let localTotal = 0;
        for (const [first] of [[7]]) localTotal += first;
        return first + third + localTotal;
      })());
      return {style, first, tail, third, key, suffix};
    }`;
  for (const command of ['serve', 'build']) {
    const code = await compile(source, command);
    const entry = new URL('../../core/src/index.ts', import.meta.url).href;
    const executable = code.replace(/(['"])@zerodep-vue\/core\1/g, JSON.stringify(entry));
    const { sample } = await import(
      'data:text/javascript;base64,' + Buffer.from(executable).toString('base64')
    );
    const { style, ...values } = sample();
    assert.deepEqual(values, { first: 5, tail: [8, 9], third: 5, key: 'a', suffix: ['b'] });
    assert(resolveClass(style).cssText.includes('width:17px;'));
  }
});

test('HMR factory environments keep user dollar names separate from this receivers', async () => {
  const code = await compile(`import {createCssContext, SystemKeywords} from '@zerodep-vue/core';
    const {useCss} = createCssContext(new SystemKeywords());
    const s = useCss();
    export function paint() {
      const $this = '"local"';
      const $$this = 'extra';
      return s.content($this).color(this.color).padding($$this.length);
    }`);
  const entry = new URL('../../core/src/index.ts', import.meta.url).href;
  const executable = code.replace(/(['"])@zerodep-vue\/core\1/g, JSON.stringify(entry));
  // 在内存执行真实开发编译输出，不落地探针文件；data 模块没有 Vite hot，使用其正常回退。
  const module = await import(
    'data:text/javascript;base64,' + Buffer.from(executable).toString('base64')
  );
  for (const color of ['red', 'blue']) {
    const resolved = resolveClass(module.paint.call({ color }));
    assert(resolved.cssText.includes('content:"local";'));
    assert(resolved.cssText.includes(`color:${color};`));
    assert(resolved.cssText.includes('padding:5px;'));
  }
});
test('hot factories retain destructuring writes and default-value reads', async () => {
  const code = await compile(`import {createCssContext, SystemKeywords} from '@zerodep-vue/core';
    const {useCss} = createCssContext(new SystemKeywords());
    const s = useCss();
    export function sample(input) {
      let first = 0, rest = [], third = 0;
      const style = s
        .width(([first = 5, ...rest] = input, first))
        .height(({value: third = first} = {}, third));
      return {style, first, rest, third};
    }`);
  const entry = new URL('../../core/src/index.ts', import.meta.url).href;
  const executable = code.replace(/(['"])@zerodep-vue\/core\1/g, JSON.stringify(entry));
  const { sample } = await import(
    'data:text/javascript;base64,' + Buffer.from(executable).toString('base64')
  );
  for (const [input, expected, tail] of [
    [[undefined, 8, 9], 5, [8, 9]],
    [[7], 7, []],
  ]) {
    const { style, first, rest, third } = sample(input);
    assert.deepEqual({ first, rest, third }, { first: expected, rest: tail, third: expected });
    const resolved = resolveClass(style);
    assert(resolved.cssText.includes(`width:${expected}px;`));
    assert(resolved.cssText.includes(`height:${expected}px;`));
  }
});

const source = `import { ref } from 'vue'; import { _component } from '@zerodep-vue/core'; import { bx, cx, globalCss } from '@zerodep-vue/core';
import { createCssContext, SystemKeywords } from '@zerodep-vue/core';
const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();

  export const App = _component(()=> { const count=ref(1); let plain=0;
    const style=s.color('red').width(bx(count.value));
    return <button class={style} onClick={()=>{count.value++;plain++;}}>{count.value}:{plain}</button>;
  });`;

test('hot signatures distinguish isolated style/render edits from initialization changes', async () => {
  const original = await compile(source);
  const style = await compile(source.replace(".color('red')", ".color('blue')"));
  const render = await compile(
    source.replace('{count.value}:{plain}', 'Count {count.value + 1}:{plain}'),
  );
  const setup = await compile(source.replace('ref(1)', 'ref(2)'));
  assert(stamp(original));
  assert.equal(stamp(original), stamp(style));
  assert.equal(stamp(original), stamp(render));
  assert.notEqual(stamp(original), stamp(setup));
  assert(original.includes('.render('));
  assert(original.includes('.style('));
  assert(original.includes('@zerodep-vue/core'));
  assert(!original.includes('@zerodep-vue/compiler'));
  assert(original.includes('set ["plain"]'));
  assert.match(original, /_environment\d*\["plain"\]\+\+/);
  await parseAsync(original, { sourceType: 'module' });
  assert(!(await compile(source, 'build')).includes('registerModule'));
  assert(!(await compile(source, 'serve', true)).includes('registerModule'));
});

test('CSS module hot factories preserve callback receivers, globals and custom properties', async () => {
  const source = `import { cx, globalCss } from '@zerodep-vue/core';
import { createCssContext, SystemKeywords } from '@zerodep-vue/core';
const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();

    const invoke=function(){ if(this!==undefined) throw Error('receiver'); return 'red'; };
    export const styles=({root: s.color(invoke())});
    export const variables=s.variable("--control-gap", '8px');
  `;
  const code = await compile(source);
  assert.equal((code.match(/\.style\(/g) ?? []).length, 2);
  assert(code.includes('"class"'));
  assert.match(code, /\(0, _environment\d*\["invoke"\]\)\(\)/);
  assert(code.includes('import.meta.hot.invalidate'));
  const globals = await compile(
    `import { createCssHost, globalCss, cx } from '@zerodep-vue/core';
import { createCssContext, SystemKeywords } from '@zerodep-vue/core';
const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();
 const host=createCssHost(); globalCss('reset', {body: s.color('red')}, {host});`,
  );
  assert(globals.includes('.onceGlobal('));
  assert(globals.includes('import.meta.hot.accept'));
});

test('independent CSS entries and destructured theme aliases retain hot factories', async () => {
  const source = `import * as api from '@zerodep-vue/core';
    import { cx as named, keyframes as animation, cx } from '@zerodep-vue/core';
import { createCssContext, SystemKeywords } from '@zerodep-vue/core';
const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();

    const context=api.createCssContext(new api.SystemKeywords());
    const {useCss: themed}=context;
    const paint=themed();
    const compose=named;
    export const first=({root: s.color('red')});
    export const second={root:paint.display('flex')};
    export const value=compose(first.root,second.root);
    export const fade=animation({from:paint.opacity(0),to:paint.opacity(1)});
    export const another=animation({from: s.opacity(0), to: s.opacity(1)});
  `;
  const before = await compile(source);
  const after = await compile(source.replace(".color('red')", ".color('blue')"));
  assert(stamp(before));
  assert.equal(stamp(before), stamp(after));
  for (const kind of ['class', 'keyframes']) assert(before.includes(`"${kind}"`), before);
  const shadow = await compile(`import { cx } from '@zerodep-vue/core';
import { createCssContext, SystemKeywords } from '@zerodep-vue/core';
const { useCss } = createCssContext(new SystemKeywords());

const s = useCss();

    export function user(s){return s.color('red');}`);
  assert(!shadow.includes('registerModule'));
  assert(!shadow.includes('traceCss'));
  // createCssContext 建立真实主题上下文，不能再被旧逻辑当作一个 class 包装。
  const factoryOnly =
    await compile(`import { createCssContext as theme, SystemKeywords, cx } from '@zerodep-vue/core';
const { useCss } = theme(new SystemKeywords());

    export const context=theme(new SystemKeywords());`);
  assert(!factoryOnly.includes('registerModule'));
  assert(!factoryOnly.includes('traceCss'));
});
