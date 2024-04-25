---
title: new 操作符
---

在调用 new 的过程中会发生以上 4 件事情：

1. 创建一个新的空对象
2. 设置原型，将构造函数的作用域赋给新对象（也就是将对象的 **proto**属性指向构造函数的 prototype 属性）
3. 指向构造函数中的代码，构造函数中的 this 指向该对象（也就是为这个对象添加属性或方法）
4. 返回新的对象

方式一：

```js
function newFactory(fn, ...args) {
  // method1
  const obj = new Object();
  obj.__proto__ = newFactory.prototype;
  newFactory.apply(obj, args);
  return obj;
}
```

方式二：

```js
function newFactory(fn, ...args) {
  const obj = Object.create(fn.prototype);
  fn.apply(obj, args);
  return obj;
}
```
