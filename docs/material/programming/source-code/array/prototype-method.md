# 原型方法

> 源码：
>
> - [https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/array-iteration.js](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/array-iteration.js#L21)
> - [https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/array-reduce.js](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/array-reduce.js)

## Array.prototype.forEach

```js
Array.prototype.forEach = function(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this)
  }
}
```

## Array.prototype.map

```js
Array.prototype.map = function(cb) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this))
  }
  return arr
}
```

## Array.prototype.filter

```js
Array.prototype.filter = function(cb) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      arr.push(this[i])
    }
  }
  return arr
}
```

## Array.prototype.filterReject - proposal

```js
Array.prototype.filterReject = function(cb) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) {
      arr.push(this[i])
    }
  }
  return arr
}
```

## Array.prototype.some

```js
// method1
Array.prototype.some = function(cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return true
    }
  }
  return false
}

// method2
Array.prototype.some = function(cb) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this))
  }
  return arr.indexOf(true) > -1
}
```

## Array.prototype.every

```js
Array.prototype.every = function(cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) {
      return false
    }
  }
  return true
}
```

## Array.prototype.find

```js
Array.prototype.find = function(cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i]
    }
  }
  return undefined
}
```

## Array.prototype.findIndex

```js
Array.prototype.findIndex = function(cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return i
    }
  }
  return -1
}
```

## Array.prototype.reduce

```js
Array.prototype.reduce = function(cb, initialValue) {
  if (!this.length || !Array.isArray(this) || typeof cb !== 'function')
      return []

  const hasInitialValue = initialValue !== undefined
  let accumulator = hasInitialValue ? initialValue : this[0]
  let startIndex = hasInitialValue ? 0 : 1

  for (let i = startIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this)
  }

  return accumulator
}
```

## Array.prototype.reduceRight

```js
Array.prototype.reduceRight = function(cb, initialValue) {
  if (!this.length || !Array.isArray(this) || typeof cb !== 'function')
      return []

  const hasInitialValue = initialValue !== undefined
  let accumulator = hasInitialValue ? initialValue : this[this.length - 1]
  let startIndex = hasInitialValue ? 0 : this.length - 1

  for (let i = this.length - 1; i >= startIndex; i--) {
    accumulator = cb(accumulator, this[i], i, this)
  }

  return accumulator
}
```
