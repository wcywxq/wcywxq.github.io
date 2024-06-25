# 数组去重

## 1. 利用 Set 数据结构去重

```js
function uniq(arr) {
  return Array.from(new Set(arr));
}
```

## 2. 双层 for + splice 去重

```js
function uniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
```

## 3. 利用 Map 数据结构去重

```js
function uniq(arr) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], true);
    } else {
      map.set(arr[i], false);
      result.push(arr[i]);
    }
  }
  return result;
}
```

## 4. 利用对象属性唯一的特点去重

```js
function uniq(arr) {
  let obj = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      result.push(arr[i]);
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  return result;
}
```

## 5. 利用 filter + indexOf 去重

```js
function uniq(arr) {
  return arr.filter((item, index, array) => array.indexOf(item) === index);
}
```

## 6. 单层 for + indexOf 去重

```js
function uniq(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(i) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}
```

## 7. 利用 reduce + includes 去重

```js
function uniq(arr) {
  return arr.reduce(
    (prev, cur) => (prev.includes(cur) ? prev : [...prev, cur], [])
  );
}
```

## 8. sort + 单层 for 对比去重

```js
function uniq(arr) {
  arr = arr.sort();
  let result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}
```

## 9. 利用 hasOwnProperty 去重

```js
function uniq(arr) {
  let obj = {};
  return arr.filter((item, index, array) => {
    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true);
  });
}
```

## 10. 递归去重

```js
function uniq(arr) {
  arr.sort((a, b) => a - b);
  function loop(i) {
    if (i >= 1) {
      if (arr[i] === arr[i - 1]) {
        arr.splice(i, 1);
      }
    }
    loop(i - 1);
  }
  loop(arr.length - 1);
  return arr;
}
```
