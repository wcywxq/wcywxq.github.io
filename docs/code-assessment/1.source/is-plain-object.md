---
title: 判断朴素对象
---

朴素对象指的是那些没有附加任何额外行为或方法的普通对象，它们是最基础的对象形态。创建方式一般为对象字面量或 new Object()

## 通过构造函数

```js
function isPlainObject(val) {
  if (typeof val !== 'object' || val === null) return false
  const proto = Object.getPrototypeOf(val)
  if (proto === null) {
    return true
  }
  // 构造函数
  const ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor
  return ctor === Object
}
```

## 使用 while

```js
function isPlainObject(val) {
  if (typeof val !== 'object' || val === null) return false

  let proto = val
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(val) === proto
}
```
