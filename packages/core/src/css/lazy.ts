/** 按首次使用初始化；工厂失败后允许重试，不缓存半成品。 */
export function lazy<Value>(create: () => Value): () => Value {
  let ready = false;
  let value: Value;
  return () => {
    if (!ready) {
      value = create();
      ready = true;
    }
    return value;
  };
}
