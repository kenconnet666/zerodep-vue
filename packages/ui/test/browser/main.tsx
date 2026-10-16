import { Search } from '@lucide/icons';
import {
  _component,
  _div,
  _form,
  _input,
  _label,
  _main,
  _output,
  _p,
  _section,
  createCssHost,
} from '@zerodep-vue/core';
import { computed, createApp, ref, shallowRef } from 'vue';
import { z } from 'zod';
import type { ButtonProps } from '../../src/index.ts';
import {
  Affix,
  Anchor,
  BackTop,
  Breadcrumb,
  Button,
  Checkbox,
  Collapse,
  CollapseItem,
  DarkTheme,
  Divider,
  Drawer,
  Field,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Input,
  LightTheme,
  Menu,
  Paragraph,
  Popover,
  Provider,
  RadioGroup,
  Scrollbar,
  Sidebar,
  Slider,
  Split,
  SplitPane,
  Switch,
  Textarea,
  Tooltip,
  useCss,
  useField,
} from '../../src/index.ts';
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
  const css = useCss();
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
  const frequencyField = useField(frequency, z.enum(['daily', 'weekly']), {
    name: 'frequency',
  });
  const choicesReadonly = ref(false);
  const cancelRadio = ref(false);
  const rejectRadio = ref(false);
  return (
    <_main
      css={css({
        fontFamily: '_ui',
        fontSize: '_medium',
        color: '_textPrimary',
        backgroundColor: '_pageBackground',
        minHeight: '100vh',
        padding: '2em',
      })}
      dir={rtl.value ? 'rtl' : 'ltr'}
    >
      <Heading as="h1" size="_extraExtraLarge">
        布局与交互验收
      </Heading>
      <Flex
        css={css({
          marginBlock: '_large',
        })}
        gap="_small"
        wrap="wrap"
      >
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
        css={css({
          maxWidth: '70em',
        })}
        columns="repeat(6, minmax(7em, 1fr))"
        gap="_small"
        data-testid="buttons"
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
      <Divider
        css={css({
          marginBlock: '_large',
        })}
      >
        文本输入
      </Divider>
      <_form
        data-testid="input-form"
        onSubmit={(event) => {
          event.preventDefault();
          submissions.value++;
        }}
      >
        <_label for="demo-query">查询内容</_label>
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
        <_output data-testid="input-value">{text.value}</_output>
        <_output data-testid="input-submissions">{submissions.value}</_output>
        <_label for="demo-notes">备注内容</_label>
        <Textarea
          id="demo-notes"
          name="notes"
          value={notes}
          rows={3}
          variant="filled"
          width="25em"
          clearable
        />
      </_form>
      <Divider
        css={css({
          marginBlock: '_large',
        })}
      >
        字段与选择控件
      </Divider>
      <_form data-testid="field-form" onSubmit={(event) => event.preventDefault()}>
        <Field state={nameField} label="称呼" help="校验结果保留原始草稿">
          <Input {...nameField.control} clearable width="20em" />
        </Field>
        <_output data-testid="field-output">{nameField.output.value}</_output>
        <Flex
          css={css({
            marginBlock: '_medium',
          })}
          gap="_medium"
        >
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
              {
                value: 'daily',
                label: '每天',
              },
              {
                value: 'weekly',
                label: '每周',
              },
            ]}
            slotInput={{
              onClick: (event) => {
                if (cancelRadio.value) event.preventDefault();
              },
            }}
          />
        </Field>
        <_output data-testid="radio-touched">{String(frequencyField.touched.value)}</_output>
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
      </_form>
      <Divider
        css={css({
          marginBlock: '_large',
        })}
      >
        浮动滚动条
      </Divider>
      <Button
        onClick={() => {
          overflow.value = !overflow.value;
        }}
      >
        切换溢出
      </Button>
      <Scrollbar
        css={css({
          width: '30em',
          maxWidth: '100%',
          marginBlock: '_medium',
          borderStyle: 'solid',
          borderWidth: '0.0625em',
          borderColor: '_border',
        })}
        data-testid="scrollbar"
        aria-label="内容滚动区域"
        height="15em"
        slotContent={{
          'data-testid': 'scroll-content',
        }}
      >
        <_div
          css={css({
            padding: '1em',
          })}
          data-testid="scroll-measure"
        >
          无论滚动条是否出现，这一行的可用宽度保持不变。
        </_div>
        {overflow.value && (
          <_div
            css={css({
              width: '55em',
              height: '40em',
              backgroundColor: '_surfaceMuted',
            })}
          >
            较长的横向和纵向内容
          </_div>
        )}
      </Scrollbar>
      <Divider
        css={css({
          marginBlock: '_large',
        })}
      >
        滑轨
      </Divider>
      <_div
        css={css({
          maxWidth: '32em',
        })}
      >
        <Slider value={sliderValue} aria-label="音量" formatValueText={(value) => `${value}%`} />
        <_p>当前值：{sliderValue.value}</_p>
        <Slider
          value={slideProgress}
          variant="rail"
          trackClick={false}
          aria-label="拖动进度"
          thumb={<Icon icon={Search} aria-hidden={true} />}
          slotThumb={{
            'data-testid': 'slide-handle',
          }}
          onValueCommit={(value) => {
            submitted.value = `已提交进度 ${value}%`;
          }}
        >
          拖动滑块至末端
        </Slider>
        <_p role="status">{submitted.value}</_p>
      </_div>
      <Collapse
        css={css({
          maxWidth: '42em',
        })}
        expandedKeys={expanded}
      >
        <CollapseItem name="a" title="可折叠面板">
          <Paragraph>展开与收起保持状态，并可用方向键导航标题。</Paragraph>
          <_input aria-label="面板内输入" />
        </CollapseItem>
        <CollapseItem name="b" title="另一个面板">
          第二个面板的内容。
        </CollapseItem>
      </Collapse>
      <Divider
        css={css({
          marginBlock: '_large',
        })}
      >
        分割工作区
      </Divider>
      <Menu
        aria-label="顶部导航"
        orientation="horizontal"
        variant="line"
        activeKey="dashboard"
        items={[
          {
            key: 'dashboard',
            label: '仪表盘',
            href: '#dashboard',
          },
          {
            key: 'tools',
            label: '更多工具',
            children: [
              {
                key: 'export',
                label: '导出记录',
                href: '#export',
              },
              {
                key: 'history',
                label: '查看历史',
                href: '#history',
              },
            ],
          },
        ]}
      />
      <Breadcrumb
        maxItems={3}
        items={[
          {
            key: 'home',
            label: '首页',
            href: '#',
          },
          {
            key: 'space',
            label: '工作区',
            href: '#space',
          },
          {
            key: 'settings',
            label: '设置',
            href: '#settings',
          },
          {
            key: 'current',
            label: '布局组件',
          },
        ]}
      />
      <Flex
        css={css({
          height: '18em',
          marginBlock: '_medium',
          borderStyle: 'solid',
          borderWidth: '0.0625em',
          borderColor: '_border',
        })}
      >
        <Sidebar header="导航示例" aria-label="演示导航">
          <Menu
            activeKey="overview"
            items={[
              {
                key: 'overview',
                label: '概览',
                href: '#section-one',
                icon: Search,
              },
              {
                key: 'settings',
                label: '设置',
                icon: Search,
                children: [
                  {
                    key: 'profile',
                    label: '个人资料',
                    href: '#profile',
                  },
                  {
                    key: 'team',
                    label: '团队设置',
                    href: '#team',
                  },
                ],
              },
              {
                key: 'separator',
                type: 'divider',
              },
              {
                key: 'disabled',
                label: '暂不可用',
                disabled: true,
              },
            ]}
          />
          <_input aria-label="侧栏草稿" placeholder="跨断点保留内容" />
        </Sidebar>
        <_div
          css={css({
            padding: '_large',
          })}
        >
          侧边导航在窄屏转为抽屉，内容实例保持不变。
        </_div>
      </Flex>
      <Flex
        css={css({
          marginBlock: '_medium',
        })}
        gap="_small"
      >
        <Popover label="快捷设置" trigger={(props) => <Button {...props}>打开浮层</Button>}>
          <_input aria-label="浮层输入" />
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
        <Sidebar
          css={css({
            height: '5em',
          })}
          media=""
          showToggle={false}
        >
          <Popover label="内联侧栏浮层" trigger={(props) => <Button {...props}>侧栏内浮层</Button>}>
            <Button>侧栏浮层操作</Button>
          </Popover>
        </Sidebar>
        <_input aria-label="抽屉输入" />
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
          <_input aria-label="第二层输入" />
        </Drawer>
        <_div
          css={css({
            height: '60em',
          })}
        >
          可滚动的设置内容
        </_div>
      </Drawer>
      <Button
        onClick={() => {
          showInspector.value = !showInspector.value;
        }}
      >
        切换检查面板
      </Button>
      <Split
        css={css({
          height: '25em',
          padding: '1em',
          borderStyle: 'solid',
          borderWidth: '0.0625em',
          borderColor: '_border',
        })}
        sizes={splitSizes}
        data-testid="split"
      >
        <SplitPane name="navigation" label="目录" min="8em" collapsible>
          <Anchor
            items={[
              {
                href: '#section-one',
                label: '概览',
              },
              {
                href: '#section-two',
                label: '详细信息',
              },
            ]}
            target={() => splitScroll.value ?? undefined}
          />
        </SplitPane>
        <SplitPane name="content" min="12em">
          <Scrollbar viewportRef={splitScroll} height="100%" aria-label="工作区内容">
            <Affix
              css={css({
                backgroundColor: '_surface',
                padding: '1em',
              })}
            >
              固定工具栏
            </Affix>
            <_section
              css={css({
                padding: '1em',
                minHeight: '18em',
              })}
              id="section-one"
            >
              概览内容，当前分配 {Math.round(splitSizes.value.content ?? 0)}%
            </_section>
            <_section
              css={css({
                padding: '1em',
                minHeight: '25em',
              })}
              id="section-two"
            >
              详细信息
            </_section>
            <BackTop
              css={css({
                insetInlineEnd: '3em',
              })}
              threshold={100}
            />
          </Scrollbar>
        </SplitPane>
        {showInspector.value && (
          <SplitPane name="inspector" label="检查面板" min="8em" collapsed={inspector} collapsible>
            检查面板
          </SplitPane>
        )}
      </Split>
    </_main>
  );
});
const App = _component(() => (
  <Provider theme={theme}>
    <Demo />
  </Provider>
));
createApp(App).use(createCssHost()).mount('#app');
