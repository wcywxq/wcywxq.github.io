---
title: 记忆化请求函数 - 可缓存请求函数
---

## 简易实现

```js
const map = new Map();
const time = 2 * 60 * 60 * 1000;

function request(options) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 300);
  });
}

async function cacheRequest(url, options) {
  let startTime = Date.now();

  if (map.has(url) && startTime - map.get(url).time <= time) {
    return map.get(url);
  } else {
    const res = await request(options);
    map.set(url, { res, time: Date.now() });
    startTime = Date.now();
    return res;
  }
}
```
