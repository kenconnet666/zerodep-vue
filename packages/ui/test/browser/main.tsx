import { createApp, computed, ref, shallowRef } from 'vue';
import { Search } from '@lucide/icons';
import { z } from 'zod';
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
  Slider,
  Split,
  SplitPane,
  Anchor,
  Affix,
  BackTop,
  Popover,
  Tooltip,
  Drawer,
  Menu,
  Breadcrumb,
  Sidebar,
  Icon,
  Input,
  Textarea,
  Checkbox,
  Switch,
  RadioGroup,
  Select,
  Listbox,
  Field,
  useField,
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
const SelectionExamples = _component(() => {
  const s = useCss();
  const initial = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `用户 ${index + 1}`,
  }));
  const options = shallowRef(initial);
  const selected = shallowRef<{ id: number; name: string } | null>(null);
  const listValue = shallowRef<string | null>(null);
  const field = useField(
    selected,
    z.object({ id: z.number(), name: z.string() }).nullable().refine(Boolean, '请选择用户'),
    { name: 'assignee' },
  );
  const readonly = ref(false);
  const nativeDisabled = ref(false);
  const dialogOpen = ref(false);
  return (
    <section data-testid="selection-section" class={s.marginBlock('_large')}>
      <Heading as="h2">选择控件</Heading>
      <form data-testid="selection-form" onSubmit={(event) => event.preventDefault()}>
        <button type="button" data-testid="before-select">
          选择前
        </button>
        <fieldset disabled={nativeDisabled.value}>
          <Field state={field} label="负责人">
            <Select
              {...field.control}
              options={options.value}
              getKey={(user) => user.id}
              getLabel={(user) => user.name}
              getFormValue={(user) => `user:${user.id}`}
              isOptionDisabled={(user) => user.id === 2}
              readonly={readonly.value}
              clearable
              placeholder="请选择"
              width="15em"
              maxHeight="10em"
              slotScrollbar={{ slotViewport: { 'data-testid': 'selection-scroll' } }}
            />
          </Field>
        </fieldset>
        <button type="button" data-testid="after-select">
          选择后
        </button>
        <button type="reset">重置选择</button>
        <output data-testid="selection-value">{selected.value?.id ?? 'none'}</output>
        <output data-testid="selection-touched">{String(field.touched.value)}</output>
      </form>
      <Button
        onClick={() => {
          options.value = options.value.length ? [] : initial;
        }}
      >
        切换选择数据
      </Button>
      <Button
        onClick={() => {
          readonly.value = !readonly.value;
        }}
      >
        切换选择只读状态
      </Button>
      <Button
        onClick={() => {
          nativeDisabled.value = !nativeDisabled.value;
        }}
      >
        切换选择原生禁用
      </Button>
      <Listbox
        value={listValue}
        options={['Apple', 'Apricot', 'Banana']}
        getKey={(item) => item}
        getLabel={(item) => item}
        aria-label="水果"
      />
      <Button
        onClick={() => {
          dialogOpen.value = true;
        }}
      >
        打开选择抽屉
      </Button>
      <Drawer open={dialogOpen} title="选择抽屉">
        <Select
          value={selected}
          options={initial}
          getKey={(user) => user.id}
          getLabel={(user) => user.name}
          aria-label="抽屉用户"
        />
      </Drawer>
    </section>
  );
});
const Demo = _component(() => {
  const s = useCss();
  const overflow = ref(false);
  const loading = ref(false);
  const expanded = ref<readonly string[]>(['a']);
  const sliderValue = ref(30);
  const slideProgress = ref(0);
  const submitted = ref('尚未提交');
  const splitSizes = ref<Readonly<Record<string, number>>>({
    navigation: 25,
    content: 50,
    inspector: 25,
  });
  const inspector = ref(false);
  const showInspector = ref(true);
  const splitScroll = shallowRef<HTMLDivElement | null | undefined>();
  const drawer = ref(false);
  const secondDrawer = ref(false);
  const tooltipDisabled = ref(false);
  const text = ref('初始内容');
  const submissions = ref(0);
  const notes = ref('第一行\n第二行');
  const nickname = ref('');
  const nameField = useField(nickname, z.string().trim().min(1, '请填写称呼'), {
    name: 'nickname',
  });
  const accepted = ref(false);
  const notifications = ref(true);
  const frequency = ref<'daily' | 'weekly'>('daily');
  const frequencyField = useField(frequency, z.enum(['daily', 'weekly']), { name: 'frequency' });
  const choicesReadonly = ref(false);
  const cancelRadio = ref(false);
  const rejectRadio = ref(false);
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
      <SelectionExamples />
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
            <Button
              data-testid="button-colors"
              color="rebeccapurple"
              backgroundColor="#fff0f5"
              borderColor="teal"
            >
              颜色覆盖
            </Button>
          </Flex>
        </GridItem>
      </Grid>
      <Divider class={s.marginBlock('_large')}>文本输入</Divider>
      <form
        data-testid="input-form"
        onSubmit={(event) => {
          event.preventDefault();
          submissions.value++;
        }}
      >
        <label for="demo-query">查询内容</label>
        <Input
          id="demo-query"
          name="query"
          value={text}
          clearable
          prefix={<Icon icon={Search} />}
          width="20em"
          status={text.value ? undefined : 'error'}
        />
        <Button type="submit">提交输入</Button>
        <Button type="reset" variant="outline">
          重置输入
        </Button>
        <output data-testid="input-value">{text.value}</output>
        <output data-testid="input-submissions">{submissions.value}</output>
        <label for="demo-notes">备注内容</label>
        <Textarea
          id="demo-notes"
          name="notes"
          value={notes}
          rows={3}
          variant="filled"
          width="25em"
          clearable
        />
      </form>
      <Divider class={s.marginBlock('_large')}>字段与选择控件</Divider>
      <form data-testid="field-form" onSubmit={(event) => event.preventDefault()}>
        <Field state={nameField} label="称呼" help="校验结果保留原始草稿">
          <Input {...nameField.control} clearable width="20em" />
        </Field>
        <output data-testid="field-output">{nameField.output.value}</output>
        <Flex gap="_medium" class={s.marginBlock('_medium')}>
          <Checkbox name="accepted" value={accepted} readonly={choicesReadonly.value}>
            接受条款
          </Checkbox>
          <Switch name="notifications" value={notifications} readonly={choicesReadonly.value}>
            启用通知
          </Switch>
        </Flex>
        <Field state={frequencyField} label="发送频率">
          <RadioGroup
            {...frequencyField.control}
            readonly={choicesReadonly.value}
            onValueChange={() => {
              if (rejectRadio.value) frequency.value = 'daily';
            }}
            options={[
              { value: 'daily', label: '每天' },
              { value: 'weekly', label: '每周' },
            ]}
            slotInput={{
              onClick: (event) => {
                if (cancelRadio.value) event.preventDefault();
              },
            }}
          />
        </Field>
        <output data-testid="radio-touched">{String(frequencyField.touched.value)}</output>
        <Button type="reset">重置字段</Button>
        <Button
          variant="text"
          onClick={() => {
            choicesReadonly.value = !choicesReadonly.value;
          }}
        >
          切换选择只读
        </Button>
        <Button
          variant="text"
          onClick={() => {
            cancelRadio.value = !cancelRadio.value;
          }}
        >
          切换选择取消
        </Button>
        <Button
          variant="text"
          onClick={() => {
            rejectRadio.value = !rejectRadio.value;
          }}
        >
          切换选择回退
        </Button>
      </form>
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
      <Divider class={s.marginBlock('_large')}>滑轨</Divider>
      <div class={s.maxWidth('32em')}>
        <Slider value={sliderValue} aria-label="音量" formatValueText={(value) => `${value}%`} />
        <p>当前值：{sliderValue.value}</p>
        <Slider
          value={slideProgress}
          variant="rail"
          trackClick={false}
          aria-label="拖动进度"
          thumb={<Icon icon={Search} aria-hidden={true} />}
          slotThumb={{ 'data-testid': 'slide-handle' }}
          onValueCommit={(value) => {
            submitted.value = `已提交进度 ${value}%`;
          }}
        >
          拖动滑块至末端
        </Slider>
        <p role="status">{submitted.value}</p>
      </div>
      <Collapse expandedKeys={expanded} class={s.maxWidth('42em')}>
        <CollapseItem name="a" title="可折叠面板">
          <Paragraph>展开与收起保持状态，并可用方向键导航标题。</Paragraph>
          <input aria-label="面板内输入" />
        </CollapseItem>
        <CollapseItem name="b" title="另一个面板">
          第二个面板的内容。
        </CollapseItem>
      </Collapse>
      <Divider class={s.marginBlock('_large')}>分割工作区</Divider>
      <Menu
        aria-label="顶部导航"
        orientation="horizontal"
        variant="line"
        activeKey="dashboard"
        items={[
          { key: 'dashboard', label: '仪表盘', href: '#dashboard' },
          {
            key: 'tools',
            label: '更多工具',
            children: [
              { key: 'export', label: '导出记录', href: '#export' },
              { key: 'history', label: '查看历史', href: '#history' },
            ],
          },
        ]}
      />
      <Breadcrumb
        maxItems={3}
        items={[
          { key: 'home', label: '首页', href: '#' },
          { key: 'space', label: '工作区', href: '#space' },
          { key: 'settings', label: '设置', href: '#settings' },
          { key: 'current', label: '布局组件' },
        ]}
      />
      <Flex
        class={s
          .height('18em')
          .marginBlock('_medium')
          .borderStyle('solid')
          .borderWidth('0.0625em')
          .borderColor('_border')}
      >
        <Sidebar header="导航示例" aria-label="演示导航">
          <Menu
            activeKey="overview"
            items={[
              { key: 'overview', label: '概览', href: '#section-one', icon: Search },
              {
                key: 'settings',
                label: '设置',
                icon: Search,
                children: [
                  { key: 'profile', label: '个人资料', href: '#profile' },
                  { key: 'team', label: '团队设置', href: '#team' },
                ],
              },
              { key: 'separator', type: 'divider' },
              { key: 'disabled', label: '暂不可用', disabled: true },
            ]}
          />
          <input aria-label="侧栏草稿" placeholder="跨断点保留内容" />
        </Sidebar>
        <div class={s.padding('_large')}>侧边导航在窄屏转为抽屉，内容实例保持不变。</div>
      </Flex>
      <Flex gap="_small" class={s.marginBlock('_medium')}>
        <Popover label="快捷设置" trigger={(props) => <Button {...props}>打开浮层</Button>}>
          <input aria-label="浮层输入" />
          <Popover label="子浮层" trigger={(props) => <Button {...props}>打开子浮层</Button>}>
            <Button>子层操作</Button>
          </Popover>
        </Popover>
        <Tooltip
          content="这是一条简短说明"
          disabled={tooltipDisabled.value}
          trigger={(props) => (
            <Button {...props} variant="outline">
              悬停提示
            </Button>
          )}
        />
        <Button
          onClick={() => {
            tooltipDisabled.value = !tooltipDisabled.value;
          }}
        >
          切换提示禁用
        </Button>
        <Button
          onClick={() => {
            drawer.value = true;
          }}
        >
          打开抽屉
        </Button>
      </Flex>
      <Drawer open={drawer} title="工作区设置">
        <Sidebar media="" showToggle={false} class={s.height('5em')}>
          <Popover label="内联侧栏浮层" trigger={(props) => <Button {...props}>侧栏内浮层</Button>}>
            <Button>侧栏浮层操作</Button>
          </Popover>
        </Sidebar>
        <input aria-label="抽屉输入" />
        <Popover label="抽屉中的浮层" trigger={(props) => <Button {...props}>抽屉内浮层</Button>}>
          <Button>浮层内动作</Button>
        </Popover>
        <Button
          onClick={() => {
            secondDrawer.value = true;
          }}
        >
          打开第二层抽屉
        </Button>
        <Drawer open={secondDrawer} title="第二层">
          <input aria-label="第二层输入" />
        </Drawer>
        <div class={s.height('60em')}>可滚动的设置内容</div>
      </Drawer>
      <Button
        onClick={() => {
          showInspector.value = !showInspector.value;
        }}
      >
        切换检查面板
      </Button>
      <Split
        sizes={splitSizes}
        data-testid="split"
        class={s
          .height('25em')
          .padding('1em')
          .borderStyle('solid')
          .borderWidth('0.0625em')
          .borderColor('_border')}
      >
        <SplitPane name="navigation" label="目录" min="8em" collapsible>
          <Anchor
            items={[
              { href: '#section-one', label: '概览' },
              { href: '#section-two', label: '详细信息' },
            ]}
            target={() => splitScroll.value ?? undefined}
          />
        </SplitPane>
        <SplitPane name="content" min="12em">
          <Scrollbar viewportRef={splitScroll} height="100%" aria-label="工作区内容">
            <Affix class={s.backgroundColor('_surface').padding('1em')}>固定工具栏</Affix>
            <section id="section-one" class={s.padding('1em').minHeight('18em')}>
              概览内容，当前分配 {Math.round(splitSizes.value.content ?? 0)}%
            </section>
            <section id="section-two" class={s.padding('1em').minHeight('25em')}>
              详细信息
            </section>
            <BackTop threshold={100} class={s.insetInlineEnd('3em')} />
          </Scrollbar>
        </SplitPane>
        {showInspector.value && (
          <SplitPane name="inspector" label="检查面板" min="8em" collapsed={inspector} collapsible>
            检查面板
          </SplitPane>
        )}
      </Split>
    </main>
  );
});
const App = _component(() => (
  <Provider theme={theme}>
    <Demo />
  </Provider>
));
createApp(App).use(createCssHost()).mount('#app');
