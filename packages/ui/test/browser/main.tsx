import { createApp, computed, ref } from 'vue';
import { Search } from '@lucide/icons';
import { _component, createCssHost } from '@zerodep-vue/core';
import {
  Button,
  Collapse,
  CollapseItem,
  DarkTheme,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  LightTheme,
  Paragraph,
  Provider,
  Scrollbar,
  useCss,
} from '../../src/index.ts';
import type { ButtonProps } from '../../src/index.ts';

const dark = ref(false);
const rtl = ref(false);
const theme = computed(() => (dark.value ? new DarkTheme() : new LightTheme()));
const variants: NonNullable<ButtonProps['variant']>[] = [
  'solid',
  'soft',
  'outline',
  'dashed',
  'text',
];
const tones: NonNullable<ButtonProps['tone']>[] = [
  'neutral',
  'primary',
  'info',
  'success',
  'warning',
  'danger',
];
const Demo = _component(() => {
  const s = useCss();
  const overflow = ref(false);
  const loading = ref(false);
  const expanded = ref<readonly string[]>(['a']);
  return (
    <main
      dir={rtl.value ? 'rtl' : 'ltr'}
      class={s
        .fontFamily('_ui')
        .fontSize('_medium')
        .color('_textPrimary')
        .backgroundColor('_pageBackground')
        .minHeight('100vh')
        .padding('2em')}
    >
      <Heading as="h1" size="_extraExtraLarge">
        布局与交互验收
      </Heading>
      <Flex gap="_small" wrap="wrap" class={s.marginBlock('_large')}>
        <Button
          onClick={() => {
            dark.value = !dark.value;
          }}
        >
          切换主题
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            rtl.value = !rtl.value;
          }}
        >
          切换方向
        </Button>
        <Button
          variant="soft"
          onClick={() => {
            loading.value = !loading.value;
          }}
        >
          切换加载
        </Button>
      </Flex>
      <Grid
        columns="repeat(6, minmax(7em, 1fr))"
        gap="_small"
        data-testid="buttons"
        class={s.maxWidth('70em')}
      >
        {variants.map((variant) =>
          tones.map((tone) => (
            <Button key={`${variant}-${tone}`} variant={variant} tone={tone} icon={Search}>
              {variant} {tone}
            </Button>
          )),
        )}
        <GridItem column="span 6">
          <Flex gap="_small">
            <Button loading={loading.value} data-testid="loading">
              保存
            </Button>
            <Button icon={Search} shape="circle" aria-label="圆形搜索" />
            <Button icon={Search} density="compact" shape="round">
              紧凑
            </Button>
            <Button icon={Search} density="comfortable" variant="dashed">
              宽松
            </Button>
            <Button disabled>禁用</Button>
          </Flex>
        </GridItem>
      </Grid>
      <Divider class={s.marginBlock('_large')}>浮动滚动条</Divider>
      <Button
        onClick={() => {
          overflow.value = !overflow.value;
        }}
      >
        切换溢出
      </Button>
      <Scrollbar
        data-testid="scrollbar"
        aria-label="内容滚动区域"
        height="15em"
        class={s
          .width('30em')
          .maxWidth('100%')
          .marginBlock('_medium')
          .borderStyle('solid')
          .borderWidth('0.0625em')
          .borderColor('_border')}
        slotContent={{ 'data-testid': 'scroll-content' }}
      >
        <div data-testid="scroll-measure" class={s.padding('1em')}>
          无论滚动条是否出现，这一行的可用宽度保持不变。
        </div>
        {overflow.value && (
          <div class={s.width('55em').height('40em').backgroundColor('_surfaceMuted')}>
            较长的横向和纵向内容
          </div>
        )}
      </Scrollbar>
      <Collapse expandedKeys={expanded} class={s.maxWidth('42em')}>
        <CollapseItem name="a" title="可折叠面板">
          <Paragraph>展开与收起保持状态，并可用方向键导航标题。</Paragraph>
          <input aria-label="面板内输入" />
        </CollapseItem>
        <CollapseItem name="b" title="另一个面板">
          第二个面板的内容。
        </CollapseItem>
      </Collapse>
    </main>
  );
});
const App = _component(() => (
  <Provider theme={theme}>
    <Demo />
  </Provider>
));
createApp(App).use(createCssHost()).mount('#app');
