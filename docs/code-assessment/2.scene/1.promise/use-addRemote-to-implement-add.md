---
title: 使用 addRemote 实现 add
---

通过调用 addRemote，实现 add 方法。addRemote 仅能计算两个数字之和，add 可以传入任意多个数字，返回的是这些数字之和

```js
const addRemote = async (a, b) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(a + b), 1000);
  });

async function add(...inputs) {
  // TODO
}

// testing
add(1, 2).then((res) => {
  console.log(res); // 3
});

add(3, 5, 2).then((res) => {
  console.log(res); // 10
});
```

## 使用 reduce 实现

```js
async function add(...inputs) {
  return inputs.reduce((acc, cur) => {
    return acc.then((val) => addRemote(val, cur));
  }, Promise.resolve(0));
}
```

## 递归实现

```js
async function add(...inputs) {
  let res = 0;
  if (inputs.length === 0) return res;
  if (inputs.length === 1) return inputs[0];

  const a = inputs.pop();
  const b = inputs.pop();

  inputs.push(await addRemote(a, b));
  return add(...inputs);
}
```

## Promise.all 实现

```js
async function add(...inputs) {
  let res = 0;
  if (inputs.length === 0) return res;
  if (inputs.length === 1) return inputs[0];

  const promises = [];
  for (let i = 0; i * 2 < inputs.length - 1; i++) {
    const p = addRemote(inputs[i * 2], inputs[i * 2 + 1]);
    promises.push(p);
  }
  if (inputs.length % 2) {
    promises.push(Promise.resolve(inputs[inputs.length - 1]));
  }

  return Promise.all(promises).then((res) => add(...res));
}
```
