---
title: 深浅拷贝
---

## 浅拷贝

### 数组浅拷贝

- Array.prototype.slice

```js
let arr = [1, 2, 3, 4]
console.log(arr.slice()) // [1, 2, 3, 4]
console.log(arr.slice() === arr) // false
```

- Array.prototype.concat

```js
let arr = [1, 2, 3, 4]
console.log(arr.concat()) // [1, 2, 3, 4]
console.log(arr.concat() === arr) // false
```

### 对象浅拷贝

浅拷贝是指，一个新的对象对原始对象的属性值进行精确地拷贝，如果拷贝的是基本数据类型，拷贝的就是基本数据类型的值，如果是引用数据类型，拷贝的就是内存地址。如果其中一个对象的引用内存地址发生改变，另一个对象也会发生变化。

- 常规实现

```js
function isObject(val) {
  return typeof val === 'object' && val !== null
}

function shallowCopy(obj) {
  if (!isObject(obj)) return
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
```

- Object.assign

```js
let target = { a: 1 }
let object2 = { b: 2 }
let object3 = { c: 3 }
Object.assign(target, object2, object3)
console.log(target)  // { a: 1, b: 2, c: 3 }
```

- 扩展运算符

```js
let obj1 = { a: 1, b: { c: 1 } }
let obj2 = { ...obj1 }
obj1.a = 2
console.log(obj1) // { a: 2, b: { c: 1 } }
console.log(obj2) // { a: 1, b: { c: 1 } }
obj1.b.c = 2
console.log(obj1) // { a: 2, b: { c: 2 } }
console.log(obj2) // { a: 1, b: { c: 2 } }
```

## 深拷贝

深拷贝相对浅拷贝而言，如果遇到属性值为引用类型的时候，它新建一个引用类型并将对应的值复制给它，因此对象获得的一个新的引用类型而不是一个原有类型的引用。深拷贝对于一些对象可以使用 JSON 的两个函数来实现，但是由于 JSON 的对象格式比 js 的对象格式更加严格，所以如果属性值里边出现函数或者 Symbol 类型的值时，会转换失败。

### 递归

```js
// 只考虑普通对象属性，不考虑内置对象和函数
function deepCopy(obj) {
  if (!obj || typeof obj !== "object") return
  let newObj = obj instanceof Array ? [] : {}
  for (let k in obj) {
    if (obj.hasOwnProperty(k) && typeof obj[k] === "object") {
      newObj[k] = deepCopy(obj[k])
    } else {
      newObj[k] = obj[k]
    }
  }
  return newObj
}
```

### JSON.stringify

- `JSON.parse(JSON.stringify(obj))` 是目前比较常用的深拷贝方法之一，它的原理就是利用 JSON.stringify 将 js 对象序列化（JSON 字符串），再使用 `JSON.parse` 来反序列化(还原) js 对象。
- 这个方法可以简单粗暴的实现深拷贝，但是还存在问题，拷贝的对象中如果有：函数，undefined，symbol，当使用过 `JSON.stringify()` 进行处理之后，都会消失。

```js
let obj1 = {
  a: 0,
  b: {
    c: 0
  }
}
let obj2 = JSON.parse(JSON.stringify(obj1))
obj1.a = 1
obj1.b.c = 1
console.log(obj1) // { a: 1, b: { c: 1 } }
console.log(obj2) // { a: 0, b: { c: 0 } }
```

### lodash.cloneDeep()

```js
import _ from 'lodash'
const obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
const obj2 = _.cloneDeep(obj1)
console.log(obj1.b.f === obj2.b.f) // false
```

### 原生语法 structuredClone

- 全局的 structuredClone() 方法使用[结构化克隆算法](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)将给定的值进行深拷贝
- 该方法还支持把原始值种的[可转移对象](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)转移到新对象，而不是把属性引用拷贝过去，可转移对象于原始对象分离并附加到新对象。它们不可以在原始对象中被访问到

```js
// Create an object with a value and a circular reference to itself.
const original = { name: "MDN" }
original.itself = original

// Clone it
const clone = structuredClone(original)

console.assert(clone !== original) // the objects are not the same (not same identity)
console.assert(clone.name === "MDN") // they do have the same values
console.assert(clone.itself === clone) // and the circular reference is preserved
```

### MessageChannel

```js
function deepCopy(obj) {
  return new Promise(resolve => {
    const { port1, port2 } = new MessageChannel()
    port1.postMessage(obj)
    port2.onmessage = msg => {
      resolve(msg.data)
    }
  })
}
```
