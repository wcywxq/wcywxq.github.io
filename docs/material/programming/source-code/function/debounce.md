# 函数防抖

## 概念

防抖是指在一定时间内，如果某个事件被频繁触发，仅在最后一次触发后等待指定时间间隔（防抖间隔）内无新的触发时，才执行对应的事件处理函数。这种技术确保了即使事件被快速连续触发多次，函数也只会被执行一次，且在最后一次触发事件后的一段时间（即防抖间隔）内没有再次触发的情况下执行。

> 理解：在频繁触发的情况下，只有**足够的空闲时间**，才执行代码一次，如果没有执行完就清除掉，重新执行逻辑。

## 应用场景

- 输入框实时搜索：用户在输入框中连续键入文字时，防抖可以确保在用户停止输入一段时间后才发送搜索请求，避免频繁发送无效或重复的搜索请求。
- 窗口大小调整：当窗口尺寸改变时（如用户拖动边框），防抖可以确保在用户停止调整尺寸后才执行布局重计算或资源重加载操作，避免在调整过程中频繁计算。

## 极简版

```js
function debounce(fn, wait) {
  let timeout
  return function(...args) {
    let context = this
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(function() {
      fn.apply(context, args)
    }, wait)
  }
}
```

## 立即执行和取消

```js
function debounce(fn, wait, immediate) {
  let timeout
  let exec = function(...args) {
    let context = this
    if (timeout) {
      clearTimeout(timeout)
    }
    if (immediate && !timeout) {
      fn.apply(context, args)
    }
    timeout = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
  exec.off = function() {
    clearTimeout(timeout)
    timeout = null
  }
  return exec
}
```
