---
title: 计算对象占用字节数
---

```text
number -> 8 byte
string -> 每个字符长度 2 byte
boolean -> 4 byte
```

## 实现

```js
let ws = new WeakSet();

function isArray(val) {
  return Object.prototype.toString.call(val) === "[object Array]";
}

function isObject(val) {
  return typeof val === "object" && val !== null;
}

// 存储已经计算过的内存，避免相同引用造成额外问题
function calculator(val) {
  let type = typeof val;

  switch (type) {
    case "string":
      return val.length * 2;
    case "boolean":
      return 4;
    case "number":
      return 8;
    case "object":
      if (isArray(val)) {
        // 递归求和计算
        return val.map(calculator).reduce((acc, cur) => acc + cur, 0);
      } else {
        // 对象
        return sizeOfObject(val);
      }
    default:
      return 0;
  }
}

function sizeOfObject(obj) {
  if (obj == null) return 0;
  let bytes = 0;

  // 对象的 key 也会占用内存
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    bytes += calculator(key);

    if (isObject(obj[key])) {
      if (ws.has(obj[key])) {
        continue;
      }
      ws.add(obj[key]);
    }

    bytes += calculator(obj[key]);
  }

  return bytes;
}

/** ==================== 测试 ==================== */
const testCase = {
  a: 111,
  b: "ccc",
  2222: false,
  obj: {
    a: 1,
    b: 2,
  },
};
console.log(sizeOfObject(testCase)); // output: 56
```
