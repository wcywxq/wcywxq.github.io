---
title: 实现前端路由
---

## 简单 hash 路由

```js
class Route {
  constructor() {
    // 路由存储对象
    this.routes = [];
    // 当前 hash
    this.currentHash = "";
    // this 指向绑定
    this.freshRoute = this.freshRoute.bind(this);
    // 监听
    window.addEventListener("load", this.freshRoute, false);
    window.addEventListener("hashchange", this.freshRoute, false);
  }
  // 存储
  storeRoute(path, cb) {
    this.route[path] = cb || function () {};
  }
  // 更新
  freshRoute() {
    this.currentRoute = location.hash.slice(1) || "/";
    this.routes[this.currentHash]();
  }
}
```
