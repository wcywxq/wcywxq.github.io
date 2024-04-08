---
title: 实现 mergePromise 函数
---

实现 mergePromise 函数，传入的数组按照顺序先后执行，返回的数据需要按照次序放到数组 data 中

```js
function time(timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timer);
  });
}

const ajax1 = () =>
  time(2000).then(() => {
    console.log(1);
    return 1;
  });

const ajax2 = () =>
  time(1000).then(() => {
    console.log(2);
    return 2;
  });

const ajax3 = () =>
  time(1000).then(() => {
    console.log(3);
    return 3;
  });

mergePromise([ajax1, ajax2, ajax3]).then((data) => {
  console.log("done");
  console.log(data); // data: [1, 2, 3]
});

// 需要分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]
```

## 实现

```js
function mergePromise(promises) {
  // save every ajax result
  const data = [];
  let p = Promise.resolve();

  for (const promise of promises) {
    // 第一次 then 为了用来调用 ajax
    // 第二次 then 为了获取 ajax 调用
    p = p.then(promise).then((res) => {
      data.push(res);
      return data;
    });
  }

  return p;
}
```
