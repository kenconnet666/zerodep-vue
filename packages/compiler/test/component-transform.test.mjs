import assert from 'node:assert/strict';
import test from 'node:test';
import { transformAsync } from '@babel/core';
import presetTypeScript from '@babel/preset-typescript';
import compiler from '../src/index.ts';

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

test('component macros recognize import aliases and namespace bindings', async () => {
  const aliased = await compile(
    'import {_component as make} from "@zerodep-vue/tsx"; export const C=make(()=> <div/>);',
  );
  assert(aliased.includes('createComponent as'));
  const namespaced = await compile(
    'import * as tsx from "@zerodep-vue/tsx"; export const C=tsx._component(()=> <div/>);',
  );
  assert(namespaced.includes('createComponent as'));
  const shadowed = await compile(
    'import {_component} from "@zerodep-vue/tsx"; function user(_component){return _component(()=> <div/>);}',
  );
  assert(!shadowed.includes('createComponent as'));
});

test('invalid prop reassignment and ambiguous initialization have located errors', async () => {
  await assert.rejects(
    compile(
      'import {_component} from "@zerodep-vue/tsx"; const C=_component(({value}:{value:string})=>{value="x";return <div/>;});',
    ),
    /ZV_READONLY_PROP/,
  );
  await assert.rejects(
    compile(
      'import {_component} from "@zerodep-vue/tsx"; import {ref} from "vue"; const C=_component(()=>{if(ready)return <div/>;const value=ref(0);return <span>{value.value}</span>;});',
    ),
    /ZV_RENDER_INIT/,
  );
});

test('default parameter order has located diagnostics but deferred callbacks can read later props', async () => {
  for (const code of ['{a=a}', '{a=b,b=1}', '{a=ctx},ctx']) {
    await assert.rejects(
      compile(
        `import {_component} from '@zerodep-vue/tsx'; const C=_component((${code})=><div>{a}</div>);`,
      ),
      /ZV_DEFAULT_ORDER/,
    );
  }
  const allowed = await compile(
    `import {_component} from '@zerodep-vue/tsx'; const C=_component(({a=1,b=a,read=()=>later,later=2})=><div>{b}{read()}</div>);`,
  );
  assert(allowed.includes('createComponent'));
  await assert.rejects(
    compile(
      `import {_component} from '@zerodep-vue/tsx'; const C=_component(function*(){return <div/>;});`,
    ),
    /setup 不能是 generator/,
  );
});

test('lexical type scopes preserve local shadows, outer aliases and enclosing generic constraints', async () => {
  const code = await compile(`
    import {_component} from '@zerodep-vue/tsx';
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
  const code = await compile(`import {_component} from '@zerodep-vue/tsx';
    const Edit=_component(({model:state,other})=>{
      const change=(other)=>other.value++;
      return <><input v-model={state.value}/><span>{other.value}</span></>;
    });`);
  assert.match(code, /resolveProps\([^;]+\["model"\]/s);
  assert(!code.includes('["model", "other"]'));
});
