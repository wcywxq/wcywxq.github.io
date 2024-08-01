# options 调用转换为 promise 调用

## 题目描述

给定一个对象 w1，它拥有形如 w1.showModel() 和 w1.showPopover() 的方法。这些方法接受一个配置对象作为参数，配置对象中包含 method, name, ...,  success, 和 fail 属性。success 和 fail 是可选的回调函数，分别在操作成功或失败时被调用。

现在需要实现一个函数 promiseLikeFn，该函数接收两个参数：w1 对象和一个字符串数组 methods（包含 w1 上的方法名）。目标是返回一个新对象 w2，形如：w2 = promiseLikeFn(w1, methods)，其中 methods 数组中的每个方法都被转换为能够以 Promise 方式调用的形式。也就是说，这些方法应该支持 .then() 和 .catch() 方法，分别对应于原始方法中的 success 和 fail 回调。

## 代码实现

```js
function promiseLikeFn(w1, methods) {
  const w2 = {}

  methods.forEach(method => {
    w2[method] = (options) => {
      const { success, fail, ...rest } = options
      return new Promise((resolve, reject) => {
        w1[method]({
          ...rest,
          success(data) {
            resolve()
            if (success && typeof success === 'function') {
              success(data)
            }
          },
          fail(err) {
            reject(err)
            if (fail && typeof fail === 'function') {
              fail(err)
            }
          }
        })
      })
    }
  })

  return w2
}
```
