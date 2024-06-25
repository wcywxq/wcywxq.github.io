# repeat 实现

输入字符串 s，以及其重复的次数，输出重复的结果，例如输入 abc，2，输出 abcabc

## 利用数组

```js
function repeat(s, n) {
  return new Array(n + 1).join(s);
}
```

## 递归实现

```js
function repeat(s, n) {
  return n > 0 ? s.concat(repeat(s, --n)) : "";
}
```
