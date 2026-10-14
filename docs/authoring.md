# Vue TSX 作者入口

本页描述当前已接入的组件作者能力。运行时 CSS 及最终混用验收仍按 BLUEPRINT.md 实施；完整进度和远程证据见 [progress.md](progress.md)。

Vite 使用 `@zerodep-vue/compiler/vite`，Babel 使用 `@zerodep-vue/compiler`。TypeScript 保持 `jsx: preserve`；自有作者文件选择 `jsxImportSource: @zerodep-vue/tsx`，也可以用文件顶部的 `/** @jsxImportSource @zerodep-vue/tsx */`。普通 Vue 文件继续选择原来的 Vue JSX 类型入口。

## 初始化与更新

```tsx
import { ref } from 'vue';
import { _component } from '@zerodep-vue/tsx';

export const Counter = _component(() => {
  const count = ref(0);
  return <button onClick={() => count.value++}>{count.value}</button>;
});
```

setup 初始化一次，返回内容在 Vue render 中持续求值。普通局部计算仍是快照；持续派生用 computed。带提前 return 的渲染分支可以更新；Vue 初始化操作应位于渲染分支之前，不能在一个可能提前返回的分支之后再创建持久状态或注册生命周期。

宏按导入身份识别，支持导入别名和 namespace。局部命名 setup 可以复用，编译器不会改变该函数在其他普通调用位置的语义。没有编译插件时调用 _component 会明确报错，不提供只能渲染一次的伪兼容实现。

## Props、默认值与内容

```tsx
import { ref, type Ref, type VNodeChild } from 'vue';

type Props = {
  value?: Ref<string>;
  disabled?: boolean;
  footer?: VNodeChild;
  children?: VNodeChild;
  onCommit?: (value: string) => void;
};

export const Editor = _component(
  ({ value = ref(''), disabled = false, footer, children, onCommit }: Props) => (
    <section>
      <input disabled={disabled} v-model={value.value} />
      {children}
      <button onClick={() => onCommit?.(value.value)}>保存</button>
      <footer>{footer}</footer>
    </section>
  ),
);
```

解构别名读取最新 prop，父级可以替换 Ref。默认值仅由缺省或 undefined 触发，按实例缓存第一次需要的结果；null、false、0 和空字符串保留。对象、数组和 Ref 的默认值不会在实例间共享，函数默认值也不会被误当成回调立即执行。参数使用可选类型声明可省略输入。

默认表达式保留参数位置原有的词法作用域，setup 内的同名局部变量不会遮蔽它捕获的外层值。`b = a` 可以引用更早参数；直接引用自身或后续参数会得到 `ZV_DEFAULT_ORDER` 诊断。延后执行的普通回调仍可捕获后面的参数，执行时读取最新输入。依赖另一个 prop 的默认值只缓存首次结果，持续派生请使用 computed。

组件类型可以使用模块导入、局部接口/别名和外围泛型约束。局部同名接口按词法作用域遮蔽，外层别名保留其定义位置的含义。运行时属性解析沿用固定 Vue 类型解析器，无法解析的类型会给出源码位置，而不是丢弃为任意 attrs。setup 支持普通或 async 函数，generator 不是 Vue 的初始化协议，会在编译时诊断。

直接 JSX 内容使用 VNodeChild，带数据内容使用真实回调参数。自有 children 读取 Vue 默认 slot；具名 footer/header 是普通 props，不自动猜测同名 slot。旧组件的具名/作用域 slot 继续使用 v-slots。增强 JSX 类型保留普通 Vue 的 slot 写法，同时检查自有组件声明的 children 类型。

Vue 的 ref、computed、watch、v-model、DOM ref 和 setup context 直接使用。需要公开方法时，通过 setup 第二参数的 expose；调用方可用显式接口为自己的组件引用标注类型。

编辑输入声明 `Ref<T>`，展示输入可声明 `Readonly<Ref<T>>`。自有 JSX 会排除传给可编辑输入的 getter-only computed，带 get/set 的 computed 继续可用。组件直接写 `.value` 或使用 v-model 时，编译接线还会用 Vue isReadonly 检查实际来源，发现只读 computed、getter toRef 或 readonly 包装时报告 `ZV_READONLY_MODEL`。TypeScript 的结构类型无法证明所有只读容器，任意业务函数内的间接写入也不会被跨函数重新分析；这些路径保留 Vue 自身的只读语义。

## 属性透传与列表

单根组件保留 Vue 自动 attrs 透传。显式通过参数 rest 或 setup context attrs 转发时，编译器关闭重复的自动透传。需要手工控制时可用 `_component(setup, { inheritAttrs: false })`；name 也沿用 Vue 选项。

```tsx
import { For } from '@zerodep-vue/tsx';

<For each={users.value} getKey={(user) => user.id} fallback={<p>暂无用户</p>}>
  {(user, index) => <UserRow user={user} position={index + 1} />}
</For>;
```

For 使用 Vue Fragment，不增加 DOM。稳定 key 保留重排后的行身份；省略 getKey 时按位置更新。回调参数是普通数据，持久状态放在行组件中。空列表或空值显示直接传入的 fallback。普通 map、if、三元和短路表达式仍遵循 JavaScript。

## 缓存、离场和异步初始化

KeepAlive、Transition、TransitionGroup、Suspense 和 defineAsyncComponent 直接使用 Vue。缓存中的实例保留状态和样式租约，缓存淘汰时释放；离场节点的 class/动画规则保留到实际 DOM 移除，而 Vue 的订阅与组件作用域仍按正常卸载流程结束。

异步初始化使用 async setup 和 Suspense。生命周期及需要组件作用域的副作用在 await 前注册，遵循普通 Vue setup 的上下文规则；初始化完成后公开方法、DOM ref 和 Ref 模型按 Vue 行为使用。等待期间被取消的组件不会在 Promise 完成后重新挂载，之前建立的作用域资源会释放。

普通 Vue 模板可以通过原生机制挂载编译后的组件，传值 props/回调、提供默认 slot 和调用 expose 方法。模板对 Ref 的自动解包没有被改变，也没有增加模板内 bx 等新语义。
