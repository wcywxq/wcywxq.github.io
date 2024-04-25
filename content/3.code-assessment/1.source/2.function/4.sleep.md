---
title: 函数睡眠
---

## 回调函数实现

```js
const sleep = (cb, timer) => setTimeout(cb, timer)

// 调用
sleep(() => {
  console.log('sleep exec!')
}, 1000)
```

## Promise 实现

```js
function sleep(timer) {
  return function() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, timer)
    })
  }
}

const p = new Promise(resolve => {
  console.log('first todo')
})
  .then(sleep(2000))
  .then(() => {
    console.log('after sleep 2000')
  })
```

## generator 实现

```js
function* sleep(timer) {
  yield new Promise((resolve, reject) => {
    setTimeout(resolve, timer)
  })
}

sleep(1000)
  .next()
  .value
  .then(() => {
    console.log('sleep exec')
  })
```

## async/await 实现

- 例 1

```js
function sleep(timer) {
  return new Promise(resolve => {
    setTimeout(resolve, timer)
  })
}

(async () => {
  await sleep(1000)
  console.log('sleep exec')
})()
```

- 例 2

```js
function sleep(fn, timer) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn())
    }, timer)
  })
}

const logger = input => () => {
  console.log(input)
  return input
}

(async () => {
  const name = await sleep(logger('test content'), 1000)
  const sex = await sleep(logger('boy'), 1000)
  const age = await sleep(logger(100), 1000)
})()

// test content 1s later
// boy 2s later
// 100 3s later
// test content boy 100
```
