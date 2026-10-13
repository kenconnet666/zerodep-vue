import type { ComponentInternalInstance } from 'vue';
import type { ClassPart, Declaration } from './types.ts';
import type { ResolvedClass } from './resolve.ts';
import type { CssHost } from './host.ts';

/** 开发检查只接收正常求值产生的结果，不能要求运行时再次读取作者 getter。 */
export interface InspectionHooks {
  resolved(
    result: ResolvedClass,
    parts: readonly ClassPart[],
    values: ReadonlyMap<Declaration, readonly string[]>,
    reads: ReadonlyMap<object, unknown>,
    frames: readonly ResolvedClass[],
  ): void;
  global(
    token: object,
    host: CssHost,
    name: string,
    source: object,
    result: ResolvedClass,
    owner: ComponentInternalInstance | null,
  ): void;
  removeGlobal(token: object): void;
}
let observer: InspectionHooks | undefined;
/** @internal 仅开发专用入口安装；生产消费不导入安装者及其数据。 */
export function setInspectionHooks(value: InspectionHooks): void {
  observer = value;
}
export function inspectionHooks(): InspectionHooks | undefined {
  return observer;
}
