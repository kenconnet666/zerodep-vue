import assert from 'node:assert/strict';
import test from 'node:test';
import { mergeAttrs } from '../../src/tsx/attrs.ts';
import { createComponent } from '../../src/tsx/runtime.ts';
import { cloneCssVNode, createCssVNode } from '../../src/css/vnode.ts';
import { normalizeClass } from 'vue';

const Own = createComponent({ inheritAttrs: false });

test('only authored slot bags merge; business objects and foreign components retain replacement', () => {
  const first = () => {};
  const next = () => {};
  const left = { slotIcon: { class: 'a', css: { width: 10 }, onClick: first }, options: { a: 1 } };
  const right = { slotIcon: { class: 'b', css: { height: 20 }, onClick: next }, options: { b: 2 } };
  const attrs = mergeAttrs(left, right);
  const foreign = createCssVNode(() => null, attrs);
  assert.equal(foreign.props.slotIcon, right.slotIcon);
  assert.equal(foreign.props.options, right.options);
  const own = createCssVNode(Own, attrs);
  assert.equal(normalizeClass(own.props.slotIcon.class), 'a b');
  assert.deepEqual(own.props.slotIcon.onClick, [first, next]);
  assert.equal(own.props.options, right.options);
  assert.deepEqual(own.props.slotIcon.css, [[undefined, left.slotIcon.css], right.slotIcon.css]);
});

test('slot merge reads top-level getters once and does not inspect foreign slot objects', () => {
  let sourceReads = 0;
  let slotReads = 0;
  const bag = {
    get title() {
      slotReads++;
      return 'title';
    },
  };
  const merged = mergeAttrs(
    {
      get slotIcon() {
        sourceReads++;
        return bag;
      },
    },
    { id: 'other' },
  );
  assert.equal(sourceReads, 1);
  assert.equal(slotReads, 0);
  createCssVNode(() => null, merged);
  assert.equal(slotReads, 0);
  createCssVNode(Own, merged);
  assert.equal(sourceReads, 1);
  assert.equal(slotReads, 1);
});

test('undefined preserves defaults, null resets a bag and component-owned content is filtered', () => {
  const input = mergeAttrs(
    {
      slotIcon: {
        title: 'default',
        children: 'forged',
        ref: {},
        key: 'other',
        onVnodeMounted() {},
      },
    },
    { slotIcon: undefined },
  );
  const node = createCssVNode(Own, input);
  assert.deepEqual(node.props.slotIcon, { title: 'default' });
  const cleared = createCssVNode(
    Own,
    mergeAttrs(input, { slotIcon: null }, { slotIcon: { id: 'new' } }),
  );
  assert.deepEqual(cleared.props.slotIcon, { id: 'new' });
  assert.throws(() => createCssVNode(Own, { slotIcon: [] }), /普通属性对象/);
  const clone = cloneCssVNode(node, { slotIcon: { title: 'clone', class: 'external' } });
  assert.equal(clone.props.slotIcon.title, 'clone');
  assert.equal(normalizeClass(clone.props.slotIcon.class), 'external');
});
