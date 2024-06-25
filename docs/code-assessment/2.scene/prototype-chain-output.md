---
title: 原型链输出
---

```js
function Foo() {
  console.log(this);
  this.getName = function () {
    console.log("1");
  };
  return this;
}

Foo.getName = function () {
  console.log(2);
};

Foo.prototype.getName = function () {
  console.log("3");
};

var getName = function () {
  console.log("4");
};

function getName() {
  console.log("5");
}

Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
```

## 输出

```js
2
4
Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
1
1
2
Foo {}
1
```

## 解析

- `Foo.getName()`
  - 输出 2。因为调用的是 Foo 的静态方法 getName
- `getName()`
  - 输出 4。因为 js 解释器会将整个 "函数声明" 提升到当前作用域的顶部，而 "函数表达式" 不会进行提升。所以此时，"函数表达式" 将 "函数声明" 覆盖掉了
- `Foo().getName()`
  - 输出 `Window` 对象或 `Global` 对象。具体根据执行环境进行区分
  - 输出 '1'。因为 `Foo` 返回了 this，this 指向 window / global，因此 getName 方法被挂载到全局
- `getName()`
  - 输出 '1'。直接调用 `window.getName()`
- `new Foo.getName()`
  - 输出 2。通过 new 操作符实例化 Foo.getName 函数，执行构造函数中的代码
- `(new Foo()).getName()`
  - 输出 `Foo{}`对象。通过 new 操作符实例化 Foo 函数，执行构造函数中的代码
  - 输出 '1'。直接调用 Foo 实例的 getName 方法
