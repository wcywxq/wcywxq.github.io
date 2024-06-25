---
title: 获取通用类型
---

```js
function getGenericType(s) {
  const r = Object.prototype.toString.call(s)
  return r.replace(/\[object (.*?)\]/, '$1').toLowerCase()
}

console.log(
  getGenericType(),
  getGenericType(null),
  getGenericType(1),
  getGenericType('1'),
  getGenericType(true),
  getGenericType(Symbol('zs')),
  getGenericType({}),
  getGenericType([]),
  getGenericType(() => {}),
  getGenericType(1n)
)
```
