import { CLASS } from './types.ts';
import type {
  ClassPart,
  CssClass,
  CssCondition,
  CssNestedInput,
  CustomPropertyValue,
  Declaration,
} from './types.ts';
import type { SystemKeywords } from './generated/system.ts';
import type { KeywordView } from './theme.ts';
import { KEYWORD, isKeyword, isThemeReference } from './tokens.ts';
import { isBinding, isTemplate } from './bindings.ts';
import { isAnimation } from './animation-token.ts';
import { declarations } from './composition.ts';
import { selectors, validateFragment } from './syntax.ts';

interface Link {
  readonly previous: Link | undefined;
  readonly part: ClassPart;
}
const snapshots = new WeakMap<object, readonly ClassPart[]>();
const root = Object.freeze({ selector: '&', target: '&', conditions: Object.freeze([]) });

/** 链共享不可变前缀；只有消费/组合时才展开，追加属性不复制已有声明。 */
export class CssAuthor<T extends SystemKeywords> implements CssClass {
  readonly keywords: KeywordView<T>;
  private readonly tail: Link | undefined;

  constructor(keywords: KeywordView<T>) {
    this.keywords = keywords;
    this.tail = undefined;
    Object.freeze(this);
  }

  get [CLASS](): readonly ClassPart[] {
    let parts = snapshots.get(this);
    if (!parts) {
      const entries: ClassPart[] = [];
      for (let link = this.tail; link; link = link.previous) entries.push(link.part);
      parts = Object.freeze(entries.reverse());
      snapshots.set(this, parts);
    }
    return parts;
  }

  private append(entries: readonly Declaration[]): this {
    if (!entries.length) return this;
    return Object.freeze(
      Object.create(Object.getPrototypeOf(this), {
        keywords: { value: this.keywords },
        tail: {
          value: Object.freeze({
            previous: this.tail,
            part: Object.freeze({ declarations: entries }),
          }),
        },
      }),
    ) as this;
  }

  protected write(property: string, input: unknown): this {
    const value = isKeyword(input) ? input[KEYWORD].value : input;
    if (value === undefined) return this;
    if (
      value !== null &&
      typeof value !== 'string' &&
      typeof value !== 'number' &&
      !isBinding(value) &&
      !isTemplate(value) &&
      !isThemeReference(value) &&
      !isAnimation(value)
    )
      throw new Error(`CSS 属性 ${property} 需要属性值。`);
    return this.append(Object.freeze([Object.freeze({ ...root, property, value })]));
  }

  /** 在当前样式后追加相对选择器或局部条件，不改变被复用的样式。 */
  select(condition: CssCondition, input: CssNestedInput): this {
    validateFragment(condition);
    if (condition.startsWith('@')) {
      if (!/^@(media|supports|container)\s+\S|^@starting-style$/.test(condition))
        throw new Error(`不支持的局部条件：${condition}`);
      return this.append(declarations(input, { ...root, conditions: [condition] }));
    }
    if (!condition.trim()) throw new Error('局部选择器不能为空。');
    return this.append(
      Object.freeze(selectors(root, condition).flatMap((context) => declarations(input, context))),
    );
  }

  /** 原生 CSS 自定义属性；名称由作者管理，数字不自动补 px。 */
  variable(name: `--${string}`, value: CustomPropertyValue): this {
    if (!/^--[\w-]+$/.test(name)) throw new Error(`无效自定义属性：${name}`);
    return this.write(name, value);
  }

  [Symbol.toPrimitive](): never {
    throw new Error('CSS 样式直接交给 class 或 cx，不能转换成字符串丢弃绑定。');
  }
}
