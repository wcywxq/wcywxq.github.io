# 定时器

## 使用 RequestAnimationFrame 实现定时器

### 浏览器默认提供的 setTimeout 和 setInterval 的问题

首先在针对浏览器端的默认实现中，setTimeout 和 setInterval 的定时是 不准确的，因为我们知道 js 是单线程的，如果前面的代码耗费了较长的时间，那么会导致后面的定时器不能按时执行。此外 setInterval 会带来性能上的问题，比如存在执行累积的问题等等。
可以使用 requestAnimationFrame 来实现定时器的要求，首先 requestAnimationFrame 自带函数节流功能，基本可以保证在 16.6ms 内只执行一次（不掉帧的情况下），并且该函数的延时效果是精确的，没有其他定时器时间不准的问题。

### requestAnimationFrame 简单介绍

requestAnimationFrame 的语法很简单：`window.requestAnimationFrame(callback)`。callback 为一个指定函数的参数，该函数在下次重新绘制动画时调用

### setTimeout 实现

重新绘制的时间即 16.6ms 执行。我们可以通过递归调用来达到定时器的效果

```js
function _setTimeout(fn, timeout) {
  let timer;
  let startTime = Date.now();
  const loop = () => {
    timer = window.requestAnimationFrame(loop);
    if (Date.now() - startTime >= timeout) {
      fn.call(this, timer);
      window.cancelAnimationFrame(timer);
    }
  };
  window.requestAnimationFrame(loop);
}
```

这里需要先定义一个开始时间 startTime，然后定义一个递归函数 loop，每次先递归调用自己获取最新的 timer，这样才能够保证可以取消掉，然后判断当前时间减去开始时间是否大于自己设定的值，如果大则回调并取消定时器即可，否则因为我们已经在一开始回调自己了，所以会在 16.6ms 后再次执行并判断，直到满足条件为止。

### setInterval 实现

```js
function _setInterval(fn, interval) {
  let timer;
  let startTime = Date.now();
  const loop = () => {
    timer = window.requestAnimationFrame(loop);
    if (Date.now() - startTime >= interval) {
      fn.call(this, timer);
      startTime = Date.now();
    }
  };
  timer = window.RequestAnimationFrame(loop);
  return timer;
}
```

## setTimeout 实现 setInterval

不完整实现：

```js
const _setInterval = (fn, interval) => {
  let timer;
  const loop = () => {
    timer = setTimeout(() => {
      // timeout 时间之后会执行真正的函数 fn
      fn();
      // 同时再次调用 interval 本身
      loop();
    }, interval);
  };
  // 开始执行
  loop();
  // 返回用于关闭定时器的函数
  return () => clearTimeout(timer);
};

let cancelInterval = _setInterval(() => {
  console.log(1);
}, 300);

setTimeout(() => {
  cancelInterval();
  console.log("1s之后关闭定时器");
}, 1000);
```

另一种方案：

```js
function _setInterval(handler, timeout, ...args) {
  // 判断是否为浏览器环境
  let isBrowser = typeof window !== "undefined";
  if (isBrowser && this !== window) {
    throw new TypeError("Illegal invocation");
  }
  let timer = {};
  if (isBrowser) {
    // 浏览器上的处理
    timer = {
      value: -1,
      valueOf() {
        return this.value;
      },
    };
    const callback = () => {
      timer.value = setTimeout(callback, timeout);
      handler.apply(this, args);
    };
    timer.value = setTimeout(callback, timeout);
  } else {
    // nodejs 的处理
    const callback = () => {
      Object.assign(timer, setTimeout(callback, timeout));
      handler.apply(this, args);
    };
    Object.assign(timer, setTimeout(callback, timeout));
  }
  return timer;
}
```

## setInterval 模拟 setTimeout

思路：setTimeout 的特性是在指定的时间内只执行一次，我们只要在 setInterval 内部执行 callback 之后，把定时器关掉即可。

```js
const _setTimeout = (fn, timeout) => {
  let timer = null;
  timer = setInterval(() => {
    // 关闭定时器，保证只执行一次fn，也就达到了setTimeout的效果了
    clearInterval(timer);
    fn();
  }, timeout);
  // 返回用于关闭定时器的方法
  return () => clearInterval(timer);
};

let cancelTimeout = _setTimeout(() => {
  console.log("1s 后打印出 1");
}, 1000);
```
