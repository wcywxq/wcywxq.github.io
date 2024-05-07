---
title: Promise
---

## 规范

目前，Promise 有两种规范：

- [Promise A+](https://promisesaplus.com/)
- [ES Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## 静态属性

### Promise\[@@species\]

静态访问器属性 Promise\[@@species\] 返回用于构造 Promise 方法返回值的构造函数。

## 静态方法

### Promise.all()

- 接收一个 promise 可迭代对象作为输入，并返回一个单独的 promise
- 返回的 promise 在所有输入的 promise 都成功兑现时（包括传入的可迭代对象为空时），返回值为一个包含所有成功兑现值的数组

> 如果输入的任何一个 promise 被拒绝，则返回的 promise 也将被拒绝，并返回第一个被拒绝的原因（在创建实例时，Promise.all 内部的实例就已经执行了）

```js
Promise.all = function(list) {
  return new Promise((resolve, reject) => {
    let count = 0 // 计数器
    let result = [] // 存放结果
    let len = list.length

    if (!len)
      resolve([])

    for (const item of list) {
      Promise.resolve(item)
        .then(val => {
          count++
          result[i] = val // 收集每个 promise 的返回值
          // 所有 promise 都成功后，将返回结果
          if (count === len)
            resolve(result)
        })
        .catch(err => reject(err))
    }
  })
}
```

### Promise.allSettled()

- 接收一个 promise 可迭代对象作为输入，并返回一个单独的 Promise
- 返回的 promise 在输入的 promise 都确定时（包括传入的可迭代对象为空时），返回的 promise 将被兑现，返回值为一个描述每个 promise 结果的对象数组

> 只有等到参数数组的所有 promise 对象都发生状态变更（无论是 fulfilled / rejected），返回的 promise 对象才会发生状态变更，一旦发生状态变更，状态总是 fulfilled，不会变为 rejected

```js
Promise.allSettled = function(list) {
  return new Promise((resolve, reject) => {
    let count = 0 // 计数器
    let result = [] // 存放结果
    let len = list.length

    if (!len)
      return []

    for (let item of list) {
      // 有的数据项可能不是 promise，因此需要包装一下
      Promise.resolve(item)
        .then(val => {
          count++
          // 成功属性设置
          result[i] = {
            status: "fulfilled",
            value: val
          }
          // 当所有的 promise 都成功后，返回结果
          if (count === len) {
            resolve(result)
          }
        })
        .catch(err => {
          count++
          // 失败属性设置
          result[i] = {
            status: "rejected",
            reason: err
          }
          // 当所有的 promise 都失败后，返回结果
          if (count === len) {
            reject(result)
          }
        })
    }
  })
}
```

### Promise.any()

- 接受一个 promise 可迭代对象作为输入，并返回单个 promise
- 返回的 promise 在任何输入的 promise 兑现时兑现，其值为第一个兑现的值
- 如果输入的 promise 都被拒绝（包括传入的可迭代对象为空时），返回的 promise 将以带有一个包含拒绝原因的数组 AggregateError 拒绝

> 只有全部实例都失败后才会返回失败，如果有一个实例的状态返回成功，则返回第一个成功的实例

```js
// 手动实现 Promise.any
Promise.any = function(list) {
  return new Promise((resolve, reject) => {
    let count = 0 // 计数器
    let len = list.length

    if (!len) return

    for (let item of list) {
      // 有的数据项可能不是 promise，因此需要包装一下
      Promise.resolve(item)
        .then(res => resolve(res))
        .catch(err => {
          count++
          // 当所有的 promise 都失败后，返回结果
          if (count === len) {
            return reject(new Error("All promises where rejected"))
          }
        })
    }
  })
}
```

### Promise.race()

- 接受一个 promise 可迭代对象作为输入，并返回单个 promise
- 返回的 promise 与第一个敲定的 promise 的最中状态保持一致

> 传入的所有实例哪一个实例的状态率先改变，那么就会返回哪个实例的返回值，无论成功还是失败

```js
Promise.race = function(list) {
  return new Promise((resolve, reject) => {
    for (let item of list) {
      // 有的数据项可能不是 promise，因此需要包装一下
      // 另一个原因是：避免非 promise 对象同时进行状态监听
      Promise.resolve(item)
        .then(res => resolve(res))
        .catch(err => reject(err))
    }
  })
}
```

### Promise.resolve()

- 返回一个新的 promise 对象，该对象以给定的值兑现
- 如果值是一个 thenable 对象（即具有 then 方法），则返回的 promise 对象会跟随该 thenable 对象，采用其最终的状态。否则，返回的 promise 对象会以该值兑现
- 通常，如果不清楚一个值是否是 promise，最好使用 promise.resolve 将其转换为 promise 对象，并将返回值作为 promsie 来处理

```js
function isPromiseLike(obj) {
  return obj && typeof obj.then === 'function'
}

Promise.resolve = function(value) {
  if (value instanceof Promise)
    return value

  if (isPromiseLike(value)) {
    return new Promise((resolve, reject) => {
      value.then(resolve, reject)
    })
  }

  return new Promise(resolve => resolve(value))
}
```

### Promise.reject()

- 返回一个新的 promise 对象，该对象以给定的原因拒绝

```js
Promise.reject = function(reason) {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}
```

### Promise.withResolvers()

- 返回一个对象，其包含一个新的 Promise 对象和两个函数，用于解决或拒绝它，对应于传入给 Promise() 构造函数执行器的两个参数

Promise.withResolvers() 完全等同于以下代码：

```js
let resolve, reject
const promise = new Promise((res, rej) => {
  resolve = res
  reject = rej
})
```

## 实例方法

### Promise.prototype.then()

- 将一个拒绝处理回调函数附加到 promise 上，并返回一个新的 promise，如果回调被调用，则解决为回调的返回值，如果 promise 被兑现，解决为其原始兑现值

### Promise.prototype.catch()

- 将一个处理去附加到 promise 上，并返回一个新的 promise，当原始 promise 被解决时解决。无论 promise 是否被兑现或者被拒绝，处理器都会在 promise 敲定时被调用

> Promise A+ 规范中未定义，ES Promise 中仅仅是 Promise.prototype.then(undefined, onRejected) 的语法糖

```js
Promise.prototype.catch = function(onRejected) {
  return this.then(undefined, onRejected)
}
```

### Promise.prototype.finally()

- 将一个兑现处理器和拒绝处理器附加到 promise 上，并返回一个新的 promise，解决为调用处理器得到的返回值，或者如果 promise 没有被处理（即相关处理器 onFulfilled 或 onRejected 不是函数），则以原始敲定值解决

## PromiseLike

```js
function isPromiseLike(obj) {
  return obj && typeof obj.then === 'function'
}
```

## A+ 规范实现

```js

// 定义三个状态
const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"

// promise 是一个构造函数
class _Promise {
  // executor 代表执行器函数
  constructor(executor) {
    // 初始化状态
    this.status = PENDING
    // 初始化返回值
    this.value = undefined
    this.reason = undefined

    // resolved 和 rejected 回调函数池
    this.onResolvedCallbackList = []
    this.onRejectedCallbackList = []

    // resolve 和 reject 回调函数
    // 需要做异常捕获
    const resolve = value => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        this.onResolvedCallbackList.forEach(fn => fn())
      }
    }
    const reject = reason => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.reason = reason
        this.onRejectedCallbackList.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  // 核心方法
  resolvePromise(promise, next, resolve, reject) {
    if (next === promise) {
      // 死循环
      return reject(new TypeError("message"))
    }

    // 是否被调用
    let called
    if (
      (typeof next === "object" && next !== null) ||
      typeof next === "function"
    ) {
      try {
        // 判断参数类型
        if (typeof next.then === "function") {
          const resolveArg = resolveNext => {
            this.resolvePromise(promise, resolveNext, resolve, reject)
          }
          const rejectArg = rejectNext => {
            if (called) return
            called = true
            this.resolvePromise(promise, rejectNext, resolve, reject)
          }

          // 函数执行, 补充参数
          next.then.call(next, resolveArg, rejectArg)
        } else {
          resolve(next)
        }
      } catch (err) {
        if (called) return
        called = true
        reject(err)
      }
    } else {
      reject(next)
    }
  }

  // 实例方法
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (function (val) {
      return val
    })
    onRejected = typeof onRejected === "function" ? onRejected : (function (val) {
      return val
    })

    const promise = new _Promise((resolve, reject) => {
      const resolveCallback = () => {
        try {
          const next = onFulfilled(this.value)
          this.resolvePromise(promise, next, resolve, reject)
        } catch (err) {
          reject(err)
        }
      }
      const rejectCallback = () => {
        try {
          const next = onRejected(this.reason)
          this.resolvePromise(promise, next, resolve, reject)
        } catch (err) {
          reject(err)
        }
      }

      if (this.status === FULFILLED) {
        // 模拟异步
        setTimeout(resolveCallback)
      }
      if (this.status === REJECTED) {
        // 模拟异步
        setTimeout(rejectCallback)
      }
      if (this.status === PENDING) {
        // 加入池子
        this.onResolvedCallbackList.push(resolveCallback)
        this.onRejectedCallbackList.push(rejectCallback)
      }
    })

    return promise
  }
  catch(callback) {
    this.then(undefined, callback)
  }

  // 静态方法
  static all(promiseList) {
    return new _Promise((resolve, reject) => {
      let count = 0
      let result = []
      let len = promiseList.length

      if (!len) {
        resolve([])
      }

      for (let item of promiseList) {
        _Promise.resolve(item)
          .then(res => {
            count += 1
            result[i] = res
            if (count === len) {
              resolve(result)
            }
          })
          .catch(err => {
            reject(err)
          })
      }
    })

  }
  static allSettled(promiseList) {
    return new _Promise((resolve, reject) => {
      let count = 0
      let result = []
      let len = promiseList.length

      if (!len) {
        return []
      }

      for (let item of promiseList) {
        _Promise.resolve(item)
          .then(res => {
            count += 1
            result[i] = {
              status: "fulfilled",
              value: res
            }
            if (count === len) {
              resolve(result)
            }
          })
          .catch(err => {
            count += 1
            result[i] = {
              status: "rejected",
              reason: err
            }
            if (count === len) {
              reject(result)
            }
          })
      }
    })
  }
  static race(promiseList) {
    return new _Promise((resolve, reject) => {
      let count = 0
      let result = []
      let len = promiseList.length

      if (!len) {
        return []
      }

      for (let item of promiseList) {
        _Promise.resolve(item)
          .then(res => {
            count += 1
            result[i] = {
              status: "fulfilled",
              value: res
            }
            if (count === len) {
              resolve(result)
            }
          })
          .catch(err => {
            count += 1
            result[i] = {
              status: "rejected",
              reason: err
            }
            if (count === len) {
              reject(result)
            }
          })
      }
    })
  }
  static any(promiseList) {
    return new _Promise((resolve, reject) => {
      let count = 0
      let len = promiseList.length

      if (!len) {
        return
      }

      for (let item of promiseList) {
        _Promise.resolve(item)
          .then(res => resolve(res))
          .catch(err => {
            count += 1
            if (count === len) {
              return reject(new Error("All promises where rejected"))
            }
          })
      }
    })
  }
}
```
