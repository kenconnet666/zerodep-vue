import assert from 'node:assert/strict';
import test from 'node:test';
import { parseAsync, transformAsync } from '@babel/core';
import presetTypeScript from '@babel/preset-typescript';
import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';
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

async function evaluate(source) {
  const code = (await compile(source))
    .replace(
      /(['"])@zerodep-vue\/core\1/g,
      JSON.stringify(new URL('../../core/src/index.ts', import.meta.url).href),
    )
    .replace(/(['"])vue\1/g, JSON.stringify(import.meta.resolve('vue')));
  return import('data:text/javascript;base64,' + Buffer.from(code).toString('base64'));
}

test('setup helper returns do not move later Vue initialization into render', async () => {
  const { C } =
    await evaluate(`import {_component} from '@zerodep-vue/core'; import {ref} from 'vue';
    export const C = _component(() => {
      function caption(){ return 'ready'; }
      const count = ref(1);
      return <div>{caption()}:{count.value}</div>;
    });`);
  assert.equal(await renderToString(createSSRApp(C)), '<div>ready:1</div>');
});

test('hoisted setup declarations remain visible before return while render helpers keep local captures', async () => {
  const module = await evaluate(`import {_component} from '@zerodep-vue/core';
    export let write, readCatch;
    export const C = _component(() => {
      const first = format(); const initial = late;
      return <div>{first}:{String(initial)}</div>;
      function format(){ return 'ready'; }
      var late = 1;
    });
    export const Local = _component(() => {
      if (false) return null;
      const value = 'render';
      function caption(){return value;}
      return <div>{caption()}</div>;
    });
    export const Writable = _component(() => {
      write = update;
      if (false) return null;
      var value = 'initial';
      return <div>{value}</div>;
      function update(){ [value] = ['changed']; return value; }
    });
    export const Catcher = _component(() => {
      readCatch = () => value;
      var outer = 'outer';
      if (false) return null;
      let seen;
      try { throw 1; } catch(value) { var value = 2; seen = value; }
      class Local { static { var outer = 'local'; } }
      return <div>{String(value)}:{seen}:{outer}</div>;
    });`);
  assert.equal(await renderToString(createSSRApp(module.C)), '<div>ready:undefined</div>');
  assert.equal(await renderToString(createSSRApp(module.Local)), '<div>render</div>');
  assert.equal(await renderToString(createSSRApp(module.Writable)), '<div>initial</div>');
  assert.equal(module.write(), 'changed');
  assert.equal(await renderToString(createSSRApp(module.Catcher)), '<div>undefined:2:outer</div>');
  assert.equal(module.readCatch(), undefined);
});

test('cross-boundary lexical captures diagnose both reads and writes before changing closure ownership', async () => {
  for (const operation of ['return value', 'value = "changed"', '[value] = ["changed"]']) {
    await assert.rejects(
      compile(`import {_component} from '@zerodep-vue/core';
      const C = _component(() => {
        const callback = helper;
        if (ready) return null;
        let value = 'render';
        return <button onClick={callback}/>;
        function helper(){ ${operation}; }
      });`),
      /ZV_RENDER_SCOPE/,
    );
  }
  const { C } = await evaluate(`import {_component} from '@zerodep-vue/core';
    export const C = _component(() => {
      type Caption = typeof caption;
      const first = helper();
      if (false) return null;
      const caption = 'ready';
      return <div>{first}:{caption}</div>;
      function helper(){ type Value = typeof caption; return 'ok'; }
    });`);
  assert.equal(await renderToString(createSSRApp(C)), '<div>ok:ready</div>');
});

test('named setup copies retain their declaration scope, lexical values and ordinary recursion', async () => {
  const { C, A, D, Early, Constructed, Recursive, plain } =
    await evaluate(`import {_component} from '@zerodep-vue/core';
    const label = 'outer';
    function setup(){ return <div>{label}</div>; }
    function create(label){ return _component(setup); }
    export const C = create('inner');
    function capture(value) {
      const arrow = () => <div>{this.label}:{arguments[0]}</div>;
      return (function(){ return _component(arrow); }).call({label:'wrong'}, 'wrong');
    }
    export const A = capture.call({label:'source'}, 'argument');
    const same = () => <div>same</div>, Declared = _component(same);
    export const D = Declared;
    export const Early = _component(early);
    function early(){ return <div>early</div>; }
    function Capture(){ const setup=()=> <div>{new.target.name}</div>; this.C=_component(setup); }
    export const Constructed = new Capture().C;
    const recursive = function recursive({n}) { if(n>0)return recursive({n:n-1}); return <div>done</div>; };
    export const Recursive = _component(recursive);
    export const plain = setup();`);
  assert.equal(await renderToString(createSSRApp(C)), '<div>outer</div>');
  assert.equal(await renderToString(createSSRApp(A)), '<div>source:argument</div>');
  assert.equal(await renderToString(createSSRApp(D)), '<div>same</div>');
  assert.equal(await renderToString(createSSRApp(Early)), '<div>early</div>');
  assert.equal(await renderToString(createSSRApp(Constructed)), '<div>Capture</div>');
  assert.equal(await renderToString(createSSRApp(Recursive, { n: 2 })), '<div>done</div>');
  assert.equal(plain.children[0], 'outer');
});

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

test('author setup only accepts props while Vue components retain their native context', async () => {
  for (const source of [
    'const C = _component((props, context) => <div/>);',
    'const C = _component((props, { expose }) => <div/>);',
    'function setup(props, { slots }) { return <div/>; } const C = _component(setup);',
    'const C = _component(({ a = context }, context) => <div>{a}</div>);',
  ]) {
    await assert.rejects(
      compile(`import {_component} from '@zerodep-vue/core'; ${source}`),
      /ZV_PROPS_ONLY/,
    );
  }
  const { Native } = await evaluate(`import {defineComponent} from 'vue';
    export const Native = defineComponent({
      setup(props, { slots, expose }) {
        expose({ read: () => 'native' });
        return () => <div>{slots.default?.() ?? 'native'}</div>;
      }
    });`);
  assert.equal(await renderToString(createSSRApp(Native)), '<div>native</div>');
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
  for (const code of ['{a=a}', '{a=b,b=1}']) {
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

test('complex types stay with TypeScript and do not create runtime coercions', async () => {
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
  assert.equal((code.match(/props: \{\}/g) ?? []).length, 3);
  assert(!/type: (Boolean|String|Number)/.test(code));
  const { Button } = await evaluate(`
    import { _button, _component } from '@zerodep-vue/core';
    import type { Props, Slot } from '@zerodep-vue/core';
    type Model = Props<typeof _button, { slotIcon?: Slot<typeof _button>; enabled?: boolean }>;
    export const Button = _component(({ enabled, slotIcon, ...rest }: Model) =>
      <_button {...rest}>{String(enabled)}:{String(slotIcon?.disabled)}</_button>);
  `);
  assert.equal(await renderToString(createSSRApp(Button)), '<button>undefined:undefined</button>');
  assert.equal(
    await renderToString(createSSRApp(Button, { enabled: false, slotIcon: { disabled: true } })),
    '<button>false:true</button>',
  );
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
