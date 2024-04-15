---
title: instanceof 关键字
---

1. 首先获取原型的类型
2. 然后获取对象的类型
3. 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null

```js
function _instanceof(target, origin) {
  if (typeof target !== "object" || target === null) return false;
  if (typeof origin !== "function") {
    throw new TypeError("origin must be function");
  }
  let proto = Object.getPrototypeOf(target); // 相当于: proto = target.__proto__
  while (proto) {
    if (proto === origin.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
```
