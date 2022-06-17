---
title: 节流
outline: deep
---

## 节流

设置了固定时间触发的时候，在触发高频事件的过程中，如果达到了设置的时间间隔，将执行 `1` 次

常用场景: `resize`、`scroll` 等一定会触发的高频事件中

### 初级版

- 第一次立即执行, 时间戳法

```javascript
function throttle(fn, wait) {
    let prev = 0
    return function (...args) {
        let context = this
        if (Date.now() - prev > wait) {
            fn.apply(context, args)
            prev = Date.now()
        }
    }
}
```

- 第一次不立即执行, 定时器法

```javascript
function throttle(fn, wait) {
    let timer
    return function (...args) {
        let context = this
        if (timer) return
        timer = setTimeout(() => {
            fn.apply(context, args)
            timer = null
        }, wait)
    }
}
```

- 结合时间戳法和定时器法, 保证第一次和最后一次都执行

```javascript
function throttle(fn, wait) {
    let timer
    let startTime = Date.now()
    return function (...args) {
        let currentTime = Date.now()
        let remainingTime = wait - (currentTime - startTimeÏ)
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

### 包含立即执行和结束后执行1次开关并且带有取消功能

```javascript
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
    let fn = function (...args) {
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
    fn.off = function () {
        clearTimer()
        startTime = 0
    }
    return fn
}
```