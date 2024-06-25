---
title: event bus
---

Event Bus 事件总线实际上就是创建一个基于发布-订阅模式（Publish/Subscribe）的对象，它可以帮助我们在不同组件或模块之间进行通信。

## 极简实现

```js
// 创建一个 EventBus 类
class EventBus {
  constructor() {
    // 初始化一个空对象来存储事件及其对应的处理器函数
    this.events = {};
  }

  // 订阅（注册）事件
  on(eventName, callback) {
    // 如果该事件还未被订阅过，则创建一个新的回调函数数组
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    // 将回调函数添加到事件对应的处理器数组中
    this.events[eventName].push(callback);
  }

  // 取消订阅事件
  off(eventName, callback) {
    if (this.events[eventName]) {
      // 从事件的处理器数组中移除指定的回调函数
      this.events[eventName] = this.events[eventName].filter(
        (cb) => cb !== callback
      );
    }
  }

  // 发布（触发）事件，并传递可选数据给回调函数
  emit(eventName, ...data) {
    // 如果存在该事件以及其相关的处理器函数
    if (this.events[eventName]) {
      // 遍历并执行所有订阅了该事件的回调函数
      this.events[eventName].forEach((callback) => callback.apply(this, data));
    }
  }

  // 添加一次性订阅方法（只会执行一次）
  once(eventName, callback) {
    const onceCallback = (...args) => {
      this.off(eventName, onceCallback);
      callback.apply(this, args);
    };
    this.on(eventName, onceCallback);
  }
}

// 使用示例：
const bus = new EventBus();

// 订阅事件
bus.on("myEvent", function (message) {
  console.log("Received:", message);
});

// 发布事件
bus.emit("myEvent", { message: "Hello from EventBus!" });

// 一次性订阅
bus.once("oneTimeEvent", function (data) {
  console.log("Fired only once with:", data);
});

// 发布一次性事件
bus.emit("oneTimeEvent", { message: "This will be logged just once." });
```

## 更完整的实现

```js
class EventBus {
  constructor() {
    this.events = {};
  }

  /**
   * 订阅事件
   * @param {string} eventName - 事件名称
   * @param {Function} callback - 事件处理器函数
   * @param {boolean} [once=false] - 是否只订阅一次
   */
  on(eventName, callback, once = false) {
    if (!eventName || typeof callback !== "function") {
      throw new Error('Invalid arguments for "on" method');
    }

    let callbacks = this.events[eventName];
    if (!callbacks) {
      callbacks = this.events[eventName] = [];
    }

    if (once) {
      const onceWrapper = (...args) => {
        callback.apply(this, args);
        this.off(eventName, onceWrapper);
      };
      callbacks.push(onceWrapper);
    } else {
      callbacks.push(callback);
    }
  }

  /**
   * 取消订阅事件
   * @param {string} eventName - 事件名称
   * @param {Function} [callback] - 要取消的特定处理器函数，不传则取消该事件的所有订阅
   */
  off(eventName, callback) {
    if (!eventName) {
      throw new Error('Invalid argument for "off" method');
    }

    const callbacks = this.events[eventName];
    if (!callbacks) return;

    if (callback) {
      this.events[eventName] = callbacks.filter((cb) => cb !== callback);
    } else {
      delete this.events[eventName];
    }
  }

  /**
   * 发布（触发）事件
   * @param {string} eventName - 事件名称
   * @param {...*} args - 传递给回调函数的参数列表
   */
  emit(eventName, ...args) {
    if (!eventName) {
      throw new Error('Invalid argument for "emit" method');
    }

    const callbacks = this.events[eventName];
    if (callbacks) {
      callbacks.forEach((cb) => cb.apply(this, args));
    }
  }
}

// 使用示例：
const bus = new EventBus();

// 订阅事件
bus.on("myEvent", function (a, b, c) {
  console.log("Received:", a, b, c);
});

// 发布事件，传递多个参数
bus.emit("myEvent", "Hello", "from", "EventBus!");

// 一次性订阅
bus.on(
  "oneTimeEvent",
  function (data) {
    console.log("Fired only once with:", data);
  },
  true
);

// 发布一次性事件
bus.emit("oneTimeEvent", { message: "This will be logged just once." });
```
