# 防抖

设置了固定时间触发的时候，在触发高频事件后如果达到了设置的时间间隔，将执行 `1` 次。如果在设置的时间间隔内再次触发，将重新计算时间

常用场景: `input` 输入
## 初级版
```javascript
function debounce(func, wait) {
	let timeout
  return function(...args) {
  	let context = this
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(function() {
    	func.apply(context, args)
    }, wait)
  }
}
```
## 可控制立即执行和带有取消功能
```javascript
function debounce(fn, wait, immediate) {
  let timeout
  let execute = function (...args) {
    let context = this
    if (timeout) clearTimeout(timeout)
    if (immediate && !timeout) {
      fn.apply(context, args)
    }
    timeout = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
  execute.off = function () {
    clearTimeout(timeout)
    timeout = null
  }
  return execute
}
```