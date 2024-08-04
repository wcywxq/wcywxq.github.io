# v3 优化内容

## 响应式 API 的变化

使用 Proxy 代替 Object.defineProperty，结合 Reflect 重构响应式系统，Proxy 可以监听到数组下标的变化和对象新增的属性，整体的代理模式为对象本身，且可拦截 apply、has 等方法

::: info

- 在 vue2 中，使用深层属性嵌套的对象做响应式，响应式处理默认是递归的，当数据层级过深时，内存消耗会特别高，因此数据需要尽量扁平化，从而产生了一些特定的处理方案
- 在 vue3 中，使用 Proxy 并不能监听到对象内部深层次属性的变化，因为它的处理方式需要在 getter 方法中去做响应式递归，这样做的好处在于，只有在真正访问到内部属性时，才会变为响应式，大大降低了性能消耗
:::

## 全局 API 变化

- vue2 导出全局的 vue 对象，在单元测试中，很容易污染全局环境以及带来冲突
- vue3 通过 createApp 创建 app 实例，一切操作修改直接转变为操作 vue 实例

## 代码体积优化

- 在代码中使用 vue3，需要设置 `<script type="module"></script>` 使其支持 esm，由于大部分 vue 提供的 api 都可以被 tree-shaking，结合 esm 具有静态结构的特性，使得在代码编译时依赖关系就已确定
- 实现了更好的 tree-shaking，它使得代码按需编译，并且通过将无用的模块进行 "剪枝"，从而让未使用的 api 不参与最终打包，最终缩减代码体积
- 通过调整代码结构，将 vue 自身作为一个对象操作，从而使得一些可能不会用到的功能就会被 tree-shaking 掉，最终使代码体积变得更小

## 组件渲染优化

在 vue2 中，父组件渲染时，子组件也会渲染；然而，vue3 支持单独渲染父组件、子组件

## 插槽和模版

::: tip 插槽
由于 vue2 的机制，导致作用域插槽会导致父组件重渲染。vue3 通过将作用域插槽转换为函数形式，解决了子组件重渲染时父组件也会重渲染的问题，提升了模版性能
:::

::: tip 模版
在 render 函数方面，vue3 也做了一系列改变，可以直接通过 api 来生成 vdom
:::

## composition api

类似 react hooks，composition api 用于解决功能、数据和业务逻辑分散的问题，使项目更益于模块化开发以及后期维护

## 更全面的 ts 类型支持

## 支持更先进的组件

- fragment：虚拟容器，使 template 支持多个根节点
- telport：传送门，使 vue 创建的组件可以挂载到全局根节点外
- suspense：等待异步组件时渲染一些额外内容，需要配合 defineAsyncComponent 使用

## diff 算法的优化

使用最长递增子序列算法，优化了对比流程，使得虚拟 dom 生成速度提升 200%

## 优化虚拟 dom

## ssr render

当静态内容达到一定量级时，会用 createStaticVnode 方法在客户端生成一个 static node，这些静态 node 会直接插入到 innerHTML，不需要创建对象，然后根据对象进行渲染

```vue
<template>
  <div>
    <div>
      <span>hello</span>
    </div>
    <div>
      <span>{{ message }}</span>
    </div>
  </div>
</template>
```

输出：

```js
import { mergeProps as _mergeProps } from "vue"
import { ssrRenderAttrs as _ssrRenderAttrs, ssrInterpolate as _ssrInter polate } from "@vue/server-renderer"
export function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _cssVars = { style: { color: _ctx.color }} _push(`<div${
    _ssrRenderAttrs(_mergeProps(_attrs, _cssVars)) }><div><span>hello</span>...<div><span>hello</span><div><span>${
    _ssrInterpolate(_ctx.message)
  }</span></div></div>`)
}
```

## 自定义渲染 api
