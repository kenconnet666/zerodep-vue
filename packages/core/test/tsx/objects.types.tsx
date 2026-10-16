import type { CssFactory, Props, Slot } from '@zerodep-vue/core';
import {
  SystemKeywords,
  _button,
  _component,
  _div,
  _input,
  _span,
  createCssContext,
} from '@zerodep-vue/core';
import { defineComponent, ref } from 'vue';

declare const tone: 'primary' | 'danger';
declare const pressed: boolean | 'mixed';
<_button
  data-tone={tone}
  aria-pressed={pressed}
  css={{
    color: 'red',
    ':disabled': { opacity: 0.5 },
    'aria-pressed': { true: { color: 'blue' }, mixed: { opacity: 0.8 } },
    'data-tone': { danger: { ':hover': { color: 'crimson' } } },
    '@media (width > 20em)': { padding: 8 },
    '--gap': '1em',
  }}
  onClick={(event) => event.preventDefault()}
/>;
<_input ref={ref<HTMLInputElement>()} type="text" onInput={(event) => event.preventDefault()} />;
<_button
  aria-pressed={true}
  css={{ 'aria-pressed': { false: { opacity: 0.5 }, mixed: { color: 'blue' } } }}
/>;
<_div css={[{ color: 'red' }, false, () => ({ ':hover': { opacity: 0.5 } })]} />;

// @ts-expect-error unknown native attribute, despite generic props inference
<_button colour="red" />;
// @ts-expect-error CSS values retain their property domains
<_button css={{ opacity: true }} />;
// @ts-expect-error misspelled property is not a selector
<_button css={{ opactiy: 0.5 }} />;
// @ts-expect-error unknown pseudo selector
<_button css={{ ':mystery': { color: 'red' } }} />;
// @ts-expect-error ARIA state values come from the native contract
<_button css={{ 'aria-pressed': { pressed: { color: 'red' } } }} />;
// @ts-expect-error data state not in the supplied attribute union
<_button data-tone={tone} css={{ 'data-tone': { warning: { color: 'red' } } }} />;
// @ts-expect-error a different data attribute is not observed here
<_button data-tone={tone} css={{ 'data-other': { primary: { color: 'red' } } }} />;
// @ts-expect-error data conditions need a supplied or declared data contract
<_button css={{ 'data-other': { primary: { color: 'red' } } }} />;
// @ts-expect-error recursive checking includes nested declarations
<_button css={{ ':hover': { opactiy: 0.2 } }} />;
// @ts-expect-error reserved runtime variable namespace
<_button css={{ '--zv-user': 'red' }} />;

type ButtonProps = Props<
  typeof _button,
  { size: 'small' | 'large'; 'data-tone'?: 'primary' | 'danger' }
>;
const Button = _component(({ size, ...rest }: ButtonProps) => (
  <_button {...rest} data-size={size} />
));
// @ts-expect-error native props inheritance must not enable authored component instance refs
<Button size="small" ref={ref()} />;
const slot: Slot<typeof Button, 'aria-pressed'> = {
  size: 'small',
  css: { 'aria-pressed': { mixed: { opacity: 0.5 } }, 'data-tone': { danger: { color: 'red' } } },
};
void slot;
// @ts-expect-error Owned field cannot be written
const owned: Slot<typeof Button, 'aria-pressed'> = { 'aria-pressed': true };
// @ts-expect-error child identity is not a slot customization
const identity: Slot<typeof _span> = { key: 'other' };
// @ts-expect-error aliases also cannot replace content
const content: Slot<typeof _span> = { children: 'replace' };
// @ts-expect-error extra replaces the native field, rather than intersecting it
const replaced: Props<typeof _input, { size?: 'small' | 'large' }> = { size: 10 };
const valid: Props<typeof _input, { size?: 'small' | 'large' }> = { size: 'small' };
const Foreign = defineComponent({ props: { label: String } });
const foreignSlot: Slot<typeof Foreign> = { label: 'ordinary Vue' };
void [owned, identity, content, replaced, valid, foreignSlot];

class Theme extends SystemKeywords {
  color = { _brand: 'red' };
}
const css = createCssContext(new Theme()).useCss();
declare const enabled: boolean;
declare const rail: Slot<typeof _div, 'aria-hidden' | 'data-part'>;
const paint = css({ color: '_brand' });
<_div css={enabled && paint} />;
<_div css={[paint]} {...rail} aria-hidden="true" data-part="rail" />;
// @ts-expect-error a forwarding spread cannot hide invalid local CSS values
<_div css={{ opacity: true }} {...rail} />;
// @ts-expect-error explicit factories validate defaults before a later typed CSS spread
<_div css={css({ opactiy: 1 })} {...rail} />;
function genericTheme<T extends Theme>(style: CssFactory<T>) {
  return style({ color: '_brand' });
}
genericTheme(css);
css({ color: '_brand', ':hover': { backgroundColor: '_brand' } });
css(() => ({ color: '_brand', width: 30 }));
// @ts-expect-error unknown theme token in an ordinary object
css({ color: '_missing' });
// @ts-expect-error factories retain theme validation
css(() => ({ color: '_missing' }));
// @ts-expect-error nested objects retain value domains
css({ ':hover': { opacity: true } });
