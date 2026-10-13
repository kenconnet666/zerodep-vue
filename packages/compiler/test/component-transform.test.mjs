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
