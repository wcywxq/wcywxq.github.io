---
title: Promise 缓存
---

promise 缓存可以解决接口多次调用而对服务器造成资源浪费的问题

- 装饰器模式

```js
const cacheMap = new Map()
function enableCache(target, name, descriptor) {
  const val = descriptor.value
  descriptor.value = async function (...args) {
    const cacheKey = name + JSON.stringify(args)
    if (!cacheMap.get(cacheKey)) {
      const cacheValue = Promise.resolve(val.apply(this, args))
        .catch(err => {
          cacheMap.set(cacheKey, null)
        })
      cacheMap.set(cacheKey, cacheValue)
    }
    return cacheMap.get(cacheKey)
  }
  return descriptor
}

class PromiseClass {
  @enableCache
  static async getInfo() { }
}

PromiseClass.getInfo()
PromiseClass.getInfo()
```
