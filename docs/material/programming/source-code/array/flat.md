# 数组扁平化

## 递归

```js
const flatDeep = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] && arr[i].length) {
      result = result.concat(flatDeep(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
```

## while + some

```js
const flatDeep = (arr) => {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
};
```

## reduce + 递归

```js
const flatDeep = (arr) => {
  return arr.reduce(
    (prev, cur) => prev.concat(Array.isArray(cur) ? flatDeep(cur) : cur),
    []
  );
};
```
