---
title: 极简 vue 实现
---

## Vue3

### 逻辑图

![逻辑图](https://raw.githubusercontent.com/wcywxq/image-store/master/ssg/code-assessment_scene_framework-code-implement_simple-vue_logic-diagram.png)

### 实现

```js
const isObject = obj => typeof obj === 'object' && obj !== null

// 已有代理的存储
let toProxy = new WeakMap()
let toRaw = new WeakMap()

// 当前激活的 effect 栈
let activeEffectStack = []
// 依赖映射表
let targetMap = new Map()

// core
const baseHandler = {
  // Proxy + Reflect
  // target: 实例化 Proxy 时使用的对象
  // key: 属性名
  // receiver: 实例化 Proxy 自身，即 proxy
  get(target, key, receiver) {
    // Object 对象可能无法访问 key、target[key] 是否成功不会报错，所以使用 Reflect
    const result = Reflect.get(target, key, receiver) // => target[key]
    // 触发 get 时进行依赖收集
    track(target, key)
    console.log('%cGetter: ', 'color: orange', target, key)
    return result
  },
  set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver) // 返回 true/false
    // 在触发 set 的时候进行触发依赖
    trigger(target, key)
    console.log('%cSetter: ', 'color: green', target, key) // => target[key] = value
    return result
  }
}

function reactive(target) {
  // 创建一个响应式对象 set、map、array、object
  return createReactiveObject(target, baseHandler)
}

function createReactiveObject(target, baseHandler) {
  // 如果不是对象，不需要代理
  if (!isObject(target)) return target

  // 检查是否已代理过该对象
  let proxy = toProxy.get(target)
  if (proxy) return proxy

  if (toRaw.has(target)) return target

  let observed = new Proxy(target, baseHandler)

  // 维护 proxy 表
  toProxy.set(target, observed)
  toRaw.set(observed, target)

  return observed
}

// dep & track & trigger
function createDep(effects) {
  const dep = new Set(effects)
  return dep
}

function track(target, key) {
  // 当前激活栈的栈顶就是当前激活的 effect
  const effect = activeEffectStack[activeEffectStack.length - 1]
  if (effect) {
    // 维护依赖表
    let depsMap = targetMap.get(target)
    if (!depsMap) {
      depsMap = new Map()
      targetMap.set(target, depsMap)
    }
    let dep = depsMap.get(key)
    if (!dep) {
      // 新建依赖项
      dep = createDep()
      depsMap.set(key, dep)
    }
    if (!dep.has(effect)) {
      dep.add(effect)
    }
  }
}

function trigger(target, key) {
  // 从依赖表中获取 effect 并逐个执行
  let depsMap = targetMap.get(target)
  if (depsMap) {
    let dep = depsMap.get(key)
    if (dep) {
      dep.forEach(effect => {
        effect()
      })
    }
  }
}

// 依赖函数
function effect(fn) {
  const effectFunc = function () {
    try {
      // 加入 effect 栈
      activeEffectStack.push(effectFunc)
      return fn()
    } finally {
      activeEffectStack.pop()
    }
  }
  // 创建 effect 就会触发一次
  effectFunc()
  return effectFunc
}

const state = reactive({
  msg: 'this is a message',
  name: 'zs',
  age: 20,
  tip: 'a tip',
  hobby: ['eat', 'sleep', 'play'],
  attr: {
    prop: {
      a: '1',
      b: 2,
      c: false,
      d: null,
      e: undefined
    }
  }
})

// 测试
console.log('before: ', state)
state.msg = 'this is a new message'
state.attr.prop.a = 2
state.attr.prop.b = '3'
state.attr.prop.c = true
state.attr.prop.d = 123n
state.attr.prop.e = Symbol('symbol')
console.log('after: ', state)

effect(() => {
  console.log(state.name, state.age, state.tip)
})
state.name = 'lisi'
state.age = 19
state.tip = 'new tip'
```

## Vue2

### 入口文件

```js [vue.js]
import Observer from './observer.js'
import Compiler from './compiler.js'

export default class Vue {
  constructor (options) {
    this.$options = options
    this.$data = options.data
    this.$methods = options.methods

    // 获取根元素，并存储到 Vue 实例
    this.initRootElement(options)
    // 利用 Object.defineProperty 将 data 属性注入到 Vue 实例
    this._proxyData(this.$data)

    // 实例化 Observer 对象，监听数据变化
    new Observer(this.$data)
    // 实例化 Compiler 对象，解析指令和模版表达式
    new Compiler(this)
  }

  // 获取根元素，并存储到 vue 实例，简单检查以下传入的 el 是否合规
  initRootElement(options) {
    if (typeof options.el === 'string') {
      this.$el = document.querySelector(options.el)
    } else if (options.el instanceof HTMLElement) {
      this.$el = options.el
    }

    if (!this.$el) {
      throw new Error('传入的 el 不合法，请传入 css 选择器或 HTMLElement')
    }
  }

  // 利用 object.definedProperty 将 data 的属性注入到 Vue 实例中
  _proxyData(data) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return data[key]
        },
        set(newVal) {
          if (data[key] === newVal) return
          data[key] = newVal
        }
      })
    })
  }
}
```

### 解析模版和指令

```js [compiler.js]
import Watcher from './watcher.js'

export default class Compiler {
  constructor(vm) {
    this.el = vm.$el
    this.vm = vm
    this.methods = vm.$methods

    // 编译模版
    this.compile(vm.$el)
  }

  // 编译模版
  compile(el) {
    const childNodes = el.childNodes
    Array.from(childNodes).forEach(node => {
      if (this.isTextNode(node)) {
        // 编译文本节点
        this.compileText(node)
      } else if (this.isElementNode(node)) {
        // 元素节点
        this.compileElement(node)
      }
      // 如果存在子节点，则递归调用
      if (node.childNodes && node.childNodes.length) {
        this.compile(node)
      }
    })
  }

  // 编译文本节点
  compileText(node) {
    const reg = /\{\{(.*?)\}\}/g
    const value = node.textContent

    if (reg.test(value)) {
      const key = RegExp.$1.trim() // 获取变量名
      node.textContent = value.replace(reg, this.vm[key])

      // 响应式更新
      new Watcher(this.vm, key, newVal => {
        node.textContent = newVal
      })
    }
  }

  // 编译元素节点
  compileElement(node) {
    if (node.attributes.length) {
      Array.from(node.attributes).forEach(attr => {
        // 遍历元素节点的所有属性
        const attrName = attr.name

        // v-model v-html v-on:click
        if (this.isDirective(attrName)) {
          let directiveName = attrName.indexOf(':') > 1
            ? attrName.subStr(5)
            : attrName.subStr(2)
          let key = attr.value
          // 更新元素节点
          this.update(node, key, directiveName)
        }
      })
    }
  }

  // 更新元素节点
  update(node, key, directiveName) {
    const fn = this[`${directiveName}Updater`]
    fn && fn.call(this, node, this.vm[key], key, directiveName)
  }

  // 解析 v-text
  textUpdater(node, value, key) {
    node.textContent = value
    new Watcher(this.vm, key, newVal => {
      node.value = newVal
    })
  }

  // 解析 v-model
  modelUpdater(node, value, key) {
    node.value = value
    new Watcher(this.vm, key, newVal => {
      node.value = newVal
    })
    // 更新值，双向绑定
    node.addEventListener('input', () => {
      this.vm[key] = node.value
    })
  }

  // 解析 v-html
  htmlUpdater(node, value, key) {
    node.innerHTML = value
    new Watcher(this.vm, key, newVal => {
      node.innerHTML = newVal
    })
  }

  // 解析 v-on
  clickUpdater(node, value, key, directiveName) {
    node.addEventListener(directiveName, this.methods[key])
  }

  // 判断元素属性是否是指令
  isDirective(attrName) {
    return attrName.startsWith('v-')
  }

  // 判断是否为文本节点
  isTextNode(node) {
    return node.nodeType === 3
  }

  // 判断是否为元素节点
  isElementNode(node) {
    return node.nodeType === 1
  }
}
```

### 依赖收集

用于收集当前响应式对象的依赖关系，每个响应式对象都有一个 dep 实例

```js [dep.js]
export default class Dep {
  constructor() {
    // 存储所有观察者
    this.watchers = []
  }

  // 添加观察者
  addWatcher(watcher) {
    if (watcher && watcher.update) {
      this.watchers.push(watcher)
    }
  }

  // 发送通知
  notify() {
    this.watchers.forEach(watcher => {
      watcher.update()
    })
  }
}
```

### 数据劫持

```js [observer.js]
import Dep from './dep.js'

export default class Observer {
  constructor(data) {
    this.traverse(data)
  }

  // 递归遍历 data 里的所有属性
  traverse(data) {
    if (!data || typeof data !== 'object') return
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }

  // 数据劫持, 给传入的数据设置 getter / setter
  defineReactive(obj, key, val) {
    this.traverse(val)

    const _self = this
    // 这里实例化，为了在 setter 中调用 dep.notify()
    const dep = new Dep()

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        // 获取的时候做依赖收集
        // Dep.target 是为了在此处添加依赖收集用的，添加之后就可以删除了，所以为 null
        Dep.target && dep.addWatcher(Dep.target)
        return val
      },
      set(newVal) {
        if (val === newVal) return
        val = newVal
        // 设置的时候可能设置了一个对象，因此需要递归
        _self.traverse(newVal)
        // 发起更新通知
        dep.notify()
      }
    })
  }
}
```

### 派发更新

```js [watcher.js]
import Dep from './dep.js'

export default class Watcher {
  /**
   * @params vm Vue 实例
   * @params key data 属性名
   * @params cb 负责更新视图的回调
   */
  constructor(vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb

    // 同一时间只维持一个 watcher
    Dep.target = this

    // 触发 get 方法，在 get 方法里去做一些操作
    this.oldVal = vm[key]

    // 为了避免重复添加 watcher，将其设置为 null
    Dep.target = null
  }

  // 当数据变化时，更新视图
  update() {
    // 需要判断新旧两个值的关系
    let newVal = this.vm[this.key]
    if (this.oldVal === newVal) return
    this.cb(newVal)
  }
}
```
