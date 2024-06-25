---
title: 对象是否循环引用
---

循环引用对象本来没有什么问题，但是序列化的时候就会发生问题，比如调用 JSON.stringify() 对该类对象进行序列化，就会报错: Converting circular structure to JSON.

```js
const isCycleObject = (obj, parent) => {
  const parentArr = parent || [obj];
  for (let k in obj) {
    if (typeof obj[k] === "object") {
      let flag = false;
      parentArr.forEach((pObj) => {
        if (pObj === obj[k]) {
          flag = true;
        }
      });
      if (flag) return true;
      flag = isCycleObject(obj[k], [...parentArr, obj[i]]);
      if (flag) return true;
    }
  }
  return false;
};

const a = 1;
const b = { a };
const c = { b };
const o = { d: { a: 3 }, c };
o.c.b.a = a;

console.log(isCycleObject(o));
```
