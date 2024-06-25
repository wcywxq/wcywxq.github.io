# 数组集合关系

```js
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [2, 4, 6, 8, 10];
```

## 交集

```js
const intersect = arr1.filter((v) => arr2.indexOf(v) > -1);
```

## 差集

```js
const minus = arr1.filter((v) => arr2.indexOf(v) === -1);
```

## 并集

```js
const union = [...arr1, ...arr2].filter((v) => arr1.indexOf(v) === -1);
```

## 补集

```js
const newArr1 = arr1.filter((v) => arr2.indexOf(v) === -1);
const newArr2 = arr2.filter((v) => arr1.indexOf(v) === -1);
const complement = [...newArr1, ...newArr2];
```
