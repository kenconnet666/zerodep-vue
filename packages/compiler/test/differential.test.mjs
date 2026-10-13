import assert from 'node:assert/strict';
import test from 'node:test';
import { transformAsync } from '@babel/core';
import presetTypeScript from '@babel/preset-typescript';
import official from '@vue/babel-plugin-jsx';
import fork from '../src/index.ts';

const cases = {
  'spread order and handlers': '<Button class="base" {...props} onClick={save} class={extra} />',
  'legacy models': '<Button v-models={[[name, "value"], [open, "show", ["lazy"]]]} />',
  'named slots and content': '<Panel v-slots={slots}><span>{message}</span></Panel>',
  'runtime directive': 'const vFocus = {}; <input v-focus={enabled} v-model={name} />',
  'native model modifiers': '<input type="number" v-model_number_trim={value} />',
  'fragment and namespace':
    'import * as Vue from "vue"; <><Vue.KeepAlive><Panel /></Vue.KeepAlive></>',
  'object slot': '<Panel>{{ default: () => <span>content</span> }}</Panel>',
  'custom pragma': '/* @jsx create */ <section />',
};

for (const [name, source] of Object.entries(cases)) {
  test(`unchanged upstream output: ${name}`, async () => {
    for (const options of [
      {},
      { optimize: true },
      { mergeProps: false },
      { enableObjectSlots: false },
      { transformOn: true, isCustomElement: (tag) => tag === 'Panel' },
    ]) {
      const compile = async (plugin) =>
        (
          await transformAsync(source, {
            filename: 'comparison.tsx',
            babelrc: false,
            configFile: false,
            plugins: [[plugin, { ...options }]],
            presets: [presetTypeScript],
          })
        )?.code;
      assert.equal(await compile(fork), await compile(official), JSON.stringify(options));
    }
  });
}
