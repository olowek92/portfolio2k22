export function setReadOnlyProperty<
  O extends Record<string, any>,
  K extends keyof O,
  V extends any
>(object: O, property: K, value: V):void {
  Object.defineProperty(object, property, {
    value,
    configurable: true,
  });
}