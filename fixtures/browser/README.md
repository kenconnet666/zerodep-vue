# 真实浏览器混用验收

此夹具使用 `fixtures/naive-ui/.generated/fork/bundle/naive.mjs`，入口别名只指向本项目插件转换完整生产清单后生成的库。启动时核对来源、301 个 TSX 命中、声明发射、当前 CI 提交及库 SHA-256；没有正确 artifact 就明确失败，不回退到 npm 预编译包。

Naive 声明从同一上游生产源码用 TypeScript 6.0.3 发射，供夹具检查其真实组件接口。该步骤使用 `noCheck` 进行声明发射，不声称对 Naive 本身做了全量类型验收；消费夹具再检查自己的调用。上游声明内部使用 skipLibCheck，项目自身源码、组件调用及 TSX 类型仍做严格检查。

远程 CI 按 development/production × Chromium/Firefox 拆分四项任务。每项使用独立服务和浏览器上下文，验证输入共享状态及 Ref 替换、默认 slot 与表格 render 回调、provider、Select Teleport、For 身份、异步加载、CSS 实际计算、动画和清理、主题隔离，以及 SSR/hydrate 的节点和样式采用。异常、Vue 警告和 hydration mismatch 会使测试失败；保留失败截图与 Playwright trace。

完整浏览器测试在远程执行。本地需要定点排查时，先取得对应提交的 Naive artifact，再用 `pnpm --filter @zerodep-vue/fixture-browser test --project chromium -g "用例名称"` 运行单项。服务仅监听 127.0.0.1:4178，测试框架负责启停，不复用不明来源的服务。完整包消费、HMR 状态保留和长期压力验证有独立验收边界，此夹具的现有通过不能代替它们。

配置依据：[Playwright 服务生命周期](https://playwright.dev/docs/test-webserver)、[浏览器项目](https://playwright.dev/docs/test-projects)。

`PW_SUITE=stability` 使用真实浏览器执行 500 次挂载、响应式更新和卸载，逐次检查 DOM ref、隐藏后绑定读取、活动租约、缓存上限和其他应用的样式；同时验证 ShadowRoot 重建后的缓存复用。生命周期用例另检查离场期间的计算样式、KeepAlive 的状态保留及淘汰。完整循环由远程 development/production × Chromium/Firefox 四组执行。

HMR 使用 `PW_SUITE=hmr` 选择独立用例；服务将 `hmr/Subject.tsx` 复制到 `.generated/hmr` 后才启动，测试修改副本并在 finally 恢复。CI 分开运行 Chromium/Firefox，防止故意制造的语法错误影响普通混用验收。需要本地定点验证时可通过 `PW_CHANNEL=msedge` 使用已安装的 Edge，仅作用于 Chromium 项目；远程继续使用锁定的 Playwright 浏览器。
