---
title: 循环打印红-黄-绿
---

红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次，如何让 3 种灯不断交替重复亮灯

```js
function red() {
  console.log("red");
}

function green() {
  console.log("green");
}

function yellow() {
  console.log("yellow");
}
```

## callback 实现

```js
function task(timer, light, callback) {
  setTimeout(() => {
    if (light === "red") red();
    else if (light === "green") green();
    else if (light === "yellow") yellow();
    callback();
  }, timer);
}

function step() {
  task(3000, "red", () => {
    task(1000, "green", () => {
      task(2000, "yellow", step);
    });
  });
}

step();
```

## promise 实现

```js
function task(timer, light) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === "red") red();
      else if (light === "green") green();
      else if (light === "yellow") yellow();
      resolve();
    }, timer);
  });
}

function step() {
  task(3000, "red")
    .then(() => task(1000, "green"))
    .then(() => task(2000, "yellow"))
    .then(step);
}

step();
```

## async/await 实现

```js
function task(timer, light) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === "red") red();
      else if (light === "green") green();
      else if (light === "yellow") yellow();
      resolve();
    }, timer);
  });
}

async function step() {
  await task(3000, "red");
  await task(1000, "green");
  await task(2000, "yellow");
  step();
}

step();
```
