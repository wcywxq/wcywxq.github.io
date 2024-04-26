---
title: 异步串行
---

## 按顺序输出

```js
let arr = [() => {
    return new Promise(res => {
        console.log("run1", Date.now());
        res()
    })
}, () => {
    return new Promise(res => {
        console.log("run2", Date.now());
        res()
    })
}, () => {
    return new Promise(res => {
        console.log("run3", Date.now());
        res()
    })
}]
```

- async/await

```js
async function serialOutput(arr) {
  for (const val of arr) {
    await val
  }
}
```

- Promise.resolve

```js
function serialOutput(arr) {
  let res = Promise.resolve()
  arr.forEach(val => {
    res = res.then(() => val())
  })
}

// reduce
function serialOutput(arr) {
  arr.reduce((acc, cur) => acc.then(() => cur()), Promise.resolve())
}
```

## promise 每隔 1s 输出

```js
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function exec(arr) {
  return arr.reduce(
    (acc, cur) =>
      acc.then(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(console.log(cur));
            }, 1000);
          })
      ),
    Promise.resolve()
  );
}

exec(list)
```

## 实现 createFlow

按照 a、b，延时 1s，c，延时 1s，d，e，done 顺序打印

```js
const log = console.log
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const subFlow = createFlow([() => delay(1000).then(() => log('c'))])
createFlow([
  () => log('a'),
  () => log('b'),
  subFlow,
  [
    () => delay(1000).then(() => log('d')),
    () => log('e')
  ]
]).run(() => {
  log('done')
})

function createFlow(iterator = []) {
  return {
    run(cb = () => { }) {
      return [...iterator, cb].reduce((prev, cur) => {
        return prev.then(
          Array.isArray(cur) ?
            createFlow(cur).run :
            cur.hasOwnProperty('run') ?
              cur.run :
              cur
        )
      }, Promise.resolve())
    }
  }
}
```
