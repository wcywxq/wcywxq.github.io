# 函数节流

## 概念

节流是指在一定时间内，无论事件被触发多少次，事件处理函数最多只会被执行一次。也就是说，即使事件连续触发，函数的执行也会被限定在一个固定的最小时间间隔内，确保在固定的时间间隔内至少有一次执行，但不会更频繁。

> 理解：规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。

## 应用场景

- 滚动事件监听：在用户滚动页面时，节流可以确保滚动事件处理函数以固定的频率（如每秒一次）执行，而非每次滚动都触发，避免过于频繁的计算和更新造成卡顿。
- 鼠标连续快速点击：在用户连续快速点击按钮时，节流可以确保在短时间内仅响应一次点击，避免重复操作带来的副作用，如多次提交表单。

## 极简版

### 时间戳法

> 第一次立即执行

```js
function throttle(fn, wait) {
  let prev = 0
  return function(...args) {
    let context = this
    if (Date.now() - prev > wait) {
      fn.apply(context, args)
      prev = Date.now()
    }
  }
}
```

### 定时器法

> 第一次不立即执行

```js
function throttle(fn, wait) {
  let timer
  return function(...args) {
    let context = this
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(context, args)
      timer = null
    }, wait)
  }
}
```

### 时间戳法 + 定时器法

> 保证第一次和最后一次都执行

```js
function throttle(fn, wait) {
  let timer
  let startTime = Date.now()
  return function(...args) {
    let currentTime = Date.now()
    let remainingTime = wait - (currentTime - startTime)
    let context = this
    if (timer) clearTimeout(timer)
    if (remainingTime <= 0) {
      fn.apply(context, args)
      startTime = Date.now()
    } else {
      timer = setTimeout(fn, remainingTime)
    }
  }
}
```

## 完整版

> 支持立即执行、结束后执行、取消

```js
/**
* @desc fn 回调函数
* @desc wait 等待事件
* @desc immediate 是否立即执行一次
* @desc trail 执行结束后是否再执行一次
*/
function throttle(fn, wait, immediate, trail) {
  let timer
  let startTime = 0
  let clearTimer = () => {
    clearTimeout(timer)
    timer = null
  }
  let fn = function(...args) {
    let context = this
    if (!prev && !immediate) {
      startTime = Date.now()
    }
    let remainingTime = wait - (Date.now() - startTime)
    if (timer) clearTimer()
    if (!timer) {
      if (remainingTime <= 0 || remainingTime > wait) {
        startTime = Date.now()
        fn.apply(context, args)
      }
      if (trail) {
        timer = setTimeout(() => {
          startTime = immediate ? 0 : Date.now()
          timer = null
          fn.apply(context, args)
        }, remainingTime)
      }
    }
  }
  fn.off = function() {
    clearTimer()
    startTime = 0
  }
  return fn
}
```
