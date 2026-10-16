import { afterEach, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createSSRApp, nextTick, ref, shallowRef } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { _component } from '@zerodep-vue/core';
import { Slider } from '../src/index.ts';

const cleanup: (() => void)[] = [];
afterEach(() => {
  while (cleanup.length) cleanup.pop()!();
  vi.restoreAllMocks();
});
function pointer(target: EventTarget, type: string, x: number, y = 10, pointerId = 1) {
  const event = new MouseEvent(type, {
    clientX: x,
    clientY: y,
    button: 0,
    bubbles: true,
    cancelable: true,
  });
  Object.defineProperty(event, 'pointerId', { value: pointerId });
  target.dispatchEvent(event);
}
function geometry(track: Element, thumb: Element, vertical = false) {
  vi.spyOn(track, 'getBoundingClientRect').mockReturnValue(
    new DOMRect(10, 10, vertical ? 20 : 220, vertical ? 220 : 20),
  );
  vi.spyOn(thumb, 'getBoundingClientRect').mockReturnValue(
    new DOMRect(10, vertical ? 210 : 10, 20, 20),
  );
}

test('slider retains the grab point, commits once and restores a cancelled drag', async () => {
  const value = ref(0);
  const changed = vi.fn();
  const committed = vi.fn();
  const wrapper = mount(
    _component(() => (
      <Slider
        value={value}
        trackClick={false}
        aria-label="拖动进度"
        onValueChange={changed}
        onValueCommit={committed}
      />
    )),
    { attachTo: document.body },
  );
  cleanup.push(() => wrapper.unmount());
  const track = wrapper.get('[data-zv-slider-track]').element;
  const thumb = wrapper.get('[role="slider"]').element;
  geometry(track, thumb);
  pointer(track, 'pointerdown', 210);
  pointer(document, 'pointerup', 210);
  expect(value.value).toBe(0);
  pointer(thumb, 'pointerdown', 12);
  expect(document.activeElement).toBe(thumb);
  pointer(document, 'pointermove', 112);
  expect(value.value).toBe(50);
  pointer(document, 'pointerup', 212);
  expect(value.value).toBe(100);
  expect(committed).toHaveBeenCalledExactlyOnceWith(100);
  expect(document.documentElement.style.userSelect).toBe('');
  value.value = 0;
  await nextTick();
  pointer(thumb, 'pointerdown', 12);
  pointer(document, 'pointermove', 112);
  pointer(document, 'pointercancel', 112);
  pointer(document, 'pointerup', 212);
  expect(value.value).toBe(0);
  expect(changed).toHaveBeenLastCalledWith(0);
  expect(committed).toHaveBeenCalledTimes(1);
});

test('keyboard decimal steps, external ref replacement and disabled state stay consistent', async () => {
  const model = shallowRef({ value: ref(0) });
  const disabled = ref(false);
  const commit = vi.fn();
  const wrapper = mount(
    _component(() => (
      <Slider
        value={model.value.value}
        min={0}
        max={0.95}
        step={0.1}
        disabled={disabled.value}
        aria-label="精度"
        onValueCommit={commit}
        slotThumb={{ 'data-part': 'knob' }}
      />
    )),
  );
  cleanup.push(() => wrapper.unmount());
  const thumb = wrapper.get('[role="slider"]');
  for (let i = 0; i < 3; i++) await thumb.trigger('keydown', { key: 'ArrowRight' });
  expect(model.value.value.value).toBe(0.3);
  expect(thumb.attributes('aria-valuenow')).toBe('0.3');
  await thumb.trigger('keydown', { key: 'End' });
  expect(model.value.value.value).toBe(0.95);
  await thumb.trigger('keydown', { key: 'ArrowLeft' });
  expect(model.value.value.value).toBe(0.9);
  const previous = model.value.value;
  model.value = { value: ref(0.5) };
  await nextTick();
  await thumb.trigger('keydown', { key: 'Home' });
  expect(model.value.value.value).toBe(0);
  expect(previous.value).toBe(0.9);
  disabled.value = true;
  await nextTick();
  await thumb.trigger('keydown', { key: 'End' });
  expect(model.value.value.value).toBe(0);
  expect(thumb.attributes('tabindex')).toBe('-1');
  expect(commit).toHaveBeenCalledTimes(6);
  expect(thumb.attributes('data-part')).toBe('knob');
});

test('vertical dragging increases upward and another slider cancels the previous owner', () => {
  const first = ref(0);
  const second = ref(0);
  const wrapper = mount(
    _component(() => (
      <div>
        <Slider value={first} orientation="vertical" />
        <Slider value={second} />
      </div>
    )),
  );
  cleanup.push(() => wrapper.unmount());
  const tracks = wrapper.findAll('[data-zv-slider-track]');
  const thumbs = wrapper.findAll('[role="slider"]');
  geometry(tracks[0]!.element, thumbs[0]!.element, true);
  geometry(tracks[1]!.element, thumbs[1]!.element);
  pointer(thumbs[0]!.element, 'pointerdown', 20, 220);
  pointer(document, 'pointermove', 20, 120);
  expect(first.value).toBe(50);
  pointer(thumbs[1]!.element, 'pointerdown', 20, 20, 2);
  expect(first.value).toBe(0);
  pointer(document, 'pointerup', 220, 20, 2);
  expect(second.value).toBe(100);
  expect(document.documentElement.style.userSelect).toBe('');
});

test('slider SSR emits the current value and clamps nonfinite values without mutating the source', async () => {
  const value = ref(Number.NaN);
  const html = await renderToString(
    createSSRApp(_component(() => <Slider value={value} min={10} max={20} aria-label="进度" />)),
  );
  expect(html).toContain('role="slider"');
  expect(html).toContain('aria-valuenow="10"');
  expect(Number.isNaN(value.value)).toBe(true);
});

test('replacing the model during a drag cancels without overwriting either model', async () => {
  const original = ref(0);
  const source = shallowRef({ value: original });
  const commit = vi.fn();
  const wrapper = mount(
    _component(() => <Slider value={source.value.value} onValueCommit={commit} />),
  );
  cleanup.push(() => wrapper.unmount());
  const track = wrapper.get('[data-zv-slider-track]').element;
  const thumb = wrapper.get('[role="slider"]').element;
  geometry(track, thumb);
  pointer(thumb, 'pointerdown', 12);
  pointer(document, 'pointermove', 112);
  expect(original.value).toBe(50);
  const replacement = ref(25);
  source.value = { value: replacement };
  await nextTick();
  pointer(document, 'pointerup', 212);
  expect(original.value).toBe(50);
  expect(replacement.value).toBe(25);
  expect(thumb.getAttribute('aria-valuenow')).toBe('25');
  expect(commit).not.toHaveBeenCalled();
  expect(document.documentElement.style.userSelect).toBe('');
});
