---
title: xhr hook 实现打印日志
---

给 xhr 添加 hook，从而实现在各个阶段打印日志

> 需要重写 xhr 的属性和方法

```js
class XhrHook {
  constructor(beforeHook = {}, afterHook = {}) {
    this.XHR = window.XMLHttpRequest;
    this.beforeHooks = beforeHook;
    this.afterHooks = afterHook;

    // 初始化
    this.init();
  }

  init() {
    const self = this;
    // 此处不用 => 是因为 this 指向问题，因为实例化后需要指向新构造出的实例上
    window.XMLHttpRequest = function () {
      this.xhr = new self.XHR();
      self.overwrite(this);
    };
  }

  overwrite(proxyXHR) {
    for (let key in proxyXHR.xhr) {
      if (typeof proxyXHR.xhr[key] === "function") {
        this.overwriteMethod(key, proxyXHR);
        continue;
      }
      this.overwriteAttributes(key, proxyXHR);
    }
  }

  // 重写方法
  overwriteMethod(key, proxyXHR) {
    let beforeHooks = this.beforeHooks; // 我们应该可以拦截原有行为
    let afterHooks = this.afterHooks;

    proxyXHR[key] = (...args) => {
      // 拦截
      if (beforeHooks[key]) {
        const res = beforeHooks[key].call(proxyXHR, args);
        if (res === false) return;
      }
      const res = proxyXHR.xhr[key].apply(proxyXHR.xhr, args);
      afterHooks[key] && afterHooks[key].call(proxyXHR.xhr, res);
      return res;
    };
  }

  // 重写属性
  overwriteAttributes(key, proxyXHR) {
    Object.defineProperties(
      proxyXHR,
      key,
      this.setPropertyDescriptor(key, proxyXHR)
    );
  }

  setPropertyDescriptor(key, proxyXHR) {
    // 得到一个非常干净的对象
    let obj = Object.create(null);
    let self = this;
    obj.set = function (val) {
      if (!key.startsWith("on")) {
        proxyXHR[`__${key}`] = val;
        return;
      }
      if (self.beforeHooks[key]) {
        this.xhr[key] = function (...args) {
          self.beforeHooks[key].call(proxyXHR);
          val.apply(proxyXHR, args);
        };
        return;
      }
      this.xhr[key] = val;
    };
    obj.get = function () {
      return proxyXHR[`__${key}`] || this.xhr[key];
    };
    return obj;
  }
}
```
