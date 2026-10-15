import assert from 'node:assert/strict';
import test from 'node:test';
import { parseAsync, transformAsync } from '@babel/core';
import presetTypeScript from '@babel/preset-typescript';
import { babelPlugin as compiler } from '../src/index.ts';

const compile = async (code) =>
  (
    await transformAsync(code, {
      filename: 'contract.tsx',
      babelrc: false,
      configFile: false,
      plugins: [compiler],
      presets: [presetTypeScript],
    })
  )?.code;

test('render lowering diagnoses async work crossing its synchronous boundary', async () => {
  for (const body of [
    'async () => <div>{await Promise.resolve("loaded")}</div>',
    'async () => { if (ready) return <div/>; const value = await load(); return <div>{value}</div>; }',
    'async () => { for await (const value of rows) { return <div>{value}</div>; } return null; }',
    'async () => { if (ready) return null; await using handle = acquire(); return <div/>; }',
  ]) {
    await assert.rejects(
      compile(`import {_component} from '@zerodep-vue/core'; const C = _component(${body});`),
      /ZV_RENDER_ASYNC/,
    );
  }
  const valid = await compile(`import {_component} from '@zerodep-vue/core';
    const C = _component(async () => {
      const value = await Promise.resolve('loaded');
      return <button onClick={async () => {
        await using handle = acquire();
        for await (const item of rows) await save(item);
      }}>{value}</button>;
    });`);
  await parseAsync(valid, { sourceType: 'module' });
});

test('component macros recognize import aliases and namespace bindings', async () => {
  const aliased = await compile(
    'import {_component as make} from "@zerodep-vue/core"; export const C=make(()=> <div/>);',
  );
  assert(aliased.includes('createComponent as'));
  const namespaced = await compile(
    'import * as tsx from "@zerodep-vue/core"; export const C=tsx._component(()=> <div/>);',
  );
  assert(namespaced.includes('createComponent as'));
  const computed = await compile(
    'import * as tsx from "@zerodep-vue/core"; export const C=tsx["_component"](()=> <div/>);',
  );
  assert(computed.includes('createComponent as'));
  const shadowed = await compile(
    'import {_component} from "@zerodep-vue/core"; function user(_component){return _component(()=> <div/>);}',
  );
  assert(!shadowed.includes('createComponent as'));
  const unrelated = await compile(
    'import {_component} from "./business"; export const C=_component(()=> <div/>);',
  );
  assert(!unrelated.includes('createComponent as'));
});

test('invalid prop reassignment and ambiguous initialization have located errors', async () => {
  await assert.rejects(
    compile(
      'import {_component} from "@zerodep-vue/core"; const C=_component(({value}:{value:string})=>{value="x";return <div/>;});',
    ),
    /ZV_READONLY_PROP/,
  );
  await assert.rejects(
    compile(
      'import {_component} from "@zerodep-vue/core"; import {ref} from "vue"; const C=_component(()=>{if(ready)return <div/>;const value=ref(0);return <span>{value.value}</span>;});',
    ),
    /ZV_RENDER_INIT/,
  );
});

test('render initialization recognizes namespace calls and watcher aliases', async () => {
  for (const expression of [
    'Vue.ref(0)',
    'Vue["computed"](() => 0)',
    'Vue.watchSyncEffect(() => {})',
    'Vue.watchPostEffect(() => {})',
    'Vue.effectScope()',
    'observe(() => {})',
  ]) {
    await assert.rejects(
      compile(`import {_component} from '@zerodep-vue/core';
      import * as Vue from 'vue'; import {watchSyncEffect as observe} from 'vue';
      const App = _component(() => { if (ready) return <div/>;
        const state = ${expression}; return <span>{state}</span>; });`),
      /ZV_RENDER_INIT/,
    );
  }
  const allowed = await compile(`import {_component} from '@zerodep-vue/core';
    import * as Vue from 'vue';
    const App = _component(() => { if (ready) return <div/>;
      const later = () => Vue.ref(0); return <button onClick={later}/>; });`);
  assert(allowed.includes('Vue.ref(0)'));
  const business = await compile(`import {_component} from '@zerodep-vue/core';
    const Vue = {ref: () => 'ordinary'};
    const App = _component(() => { if (ready) return <div/>; return <span>{Vue.ref()}</span>; });`);
  assert(business.includes('Vue.ref()'));
});

test('default parameter order has located diagnostics but deferred callbacks can read later props', async () => {
  for (const code of ['{a=a}', '{a=b,b=1}', '{a=ctx},ctx']) {
    await assert.rejects(
      compile(
        `import {_component} from '@zerodep-vue/core'; const C=_component((${code})=><div>{a}</div>);`,
      ),
      /ZV_DEFAULT_ORDER/,
    );
  }
  const allowed = await compile(
    `import {_component} from '@zerodep-vue/core'; const C=_component(({a=1,b=a,read=()=>later,later=2})=><div>{b}{read()}</div>);`,
  );
  assert(allowed.includes('createComponent'));
  await assert.rejects(
    compile(
      `import {_component} from '@zerodep-vue/core'; const C=_component(function*(){return <div/>;});`,
    ),
    /setup 不能是 generator/,
  );
});

test('lexical type scopes preserve local shadows, outer aliases and enclosing generic constraints', async () => {
  const code = await compile(`
    import {_component} from '@zerodep-vue/core';
    interface Model { outer: string }
    type Captured = Model;
    function create<T extends { generic: number }>() {
      interface Model { inner: boolean }
      const Inner = _component((props: Model) => <div>{props.inner}</div>);
      const Outer = _component((props: Captured) => <div>{props.outer}</div>);
      const Generic = _component((props: T) => <div>{props.generic}</div>);
      return { Inner, Outer, Generic };
    }
  `);
  assert.match(code, /inner:\s*\{\s*type: Boolean/);
  assert.match(code, /outer:\s*\{\s*type: String/);
  assert.match(code, /generic:\s*\{\s*type: Number/);
  assert.equal((code.match(/inner:\s*\{/g) ?? []).length, 1);
  assert.equal((code.match(/outer:\s*\{/g) ?? []).length, 1);
});

test('editable model discovery respects prop aliases and nested shadowing', async () => {
  const code = await compile(`import {_component} from '@zerodep-vue/core';
    const Edit=_component(({model:state,other})=>{
      const change=(other)=>other.value++;
      return <><input v-model={state.value}/><span>{other.value}</span></>;
    });`);
  assert.match(code, /resolveProps\([^;]+\["model"\]/s);
  assert(!code.includes('["model", "other"]'));
});
