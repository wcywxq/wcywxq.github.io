---
title: 遍历集合
---

## union()

获取两个集合的并集

```js
const creation = new Set(['coding', 'writing', 'painting']);

const joy = new Set(['crying', 'laughing', 'coding']);

console.log(creation.union(joy));
// Set {'coding', 'crying', 'writing', 'laughing', 'painting'}
```

由于它是不可变的并且返回一个对象副本，你可以无限地调用

```js
const odd = new Set([21, 23, 25]);

const even = new Set([20, 22, 24]);

const prime = new Set([23, 29]);

console.log(odd.union(even).union(prime));
// Set(7) {21, 23, 25, 20, 22, 24, 29}
```

## intersection()

获取两个集合的交集

```js
const mobile = new Set(['javascript', 'java', 'swift', 'dart']);

const backend = new Set(['php', 'python', 'javascript', 'java']);
const frontend = new Set(['javascript', 'dart']);

console.log(mobile.intersection(backend));
// Set {javascript,java}

console.log(mobile.intersection(backend).intersection(frontend));
// Set {javascript}
```

## difference()

获取两个集合的差集

```js
const joy = new Set(['crying', 'laughing', 'coding']);

const pain = new Set(['crying', 'screaming', 'coding']);

console.log(joy.difference(pain));
// Set {'laughing'}
```

## symmetricDifference()

双向获取集合差异，即（A-B）U（B-A）。返回只在集合 A 或集合 B 中的元素

```js
const joy = new Set(['crying', 'laughing', 'coding']);

const pain = new Set(['crying', 'screaming', 'coding']);

console.log(joy.symmetricDifference(pain));
// Set {'laughing', 'screaming'}
```

## isSubsetOf()

检查一个集合的所有元素是否都在另一个集合中

```js
const colors = new Set(['indigo', 'teal', 'cyan', 'violet']);

const purpleish = new Set(['indigo', 'violet']);

const secondary = new Set(['orange', 'green', 'violet']);

console.log(purpleish.isSubsetOf(colors)); // true

console.log(secondary.isSubsetOf(colors)); // false

console.log(colors.isSubsetOf(colors)); // true
```

## isSupersetOf()

检查一个集合是否包含另一个集合中的所有元素

```js
const colors = new Set(['salmon', 'cyan', 'yellow', 'aqua']);

const blueish = new Set(['cyan', 'aqua']);

const primary = new Set(['red', 'yellow', 'blue']);

console.log(colors.isSupersetOf(blueish)); // true

console.log(colors.isSupersetOf(primary)); // false

console.log(colors.isSupersetOf(colors)); // true
```

## isDisjointFrom()

两个集合是否没有任何共同的元素

```js
const ai = new Set(['python', 'c++']);

const mobile = new Set(['java', 'is', 'dart', 'kotlin']);

const frontend = new Set(['js', 'dart']);

console.log(ai.isDisjointFrom(mobile)); // true

console.log(mobile.isDisjointFrom(frontend)); // false
```
