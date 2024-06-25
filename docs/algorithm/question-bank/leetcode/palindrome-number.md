---
title: No.9 回文数
url: https://leetcode.cn/problems/palindrome-number
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

- 例如，121 是回文，而 123 不是。

示例 1：

```text
输入：x = 121
输出：true
```

示例 2：

```text
输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

示例 3：

```text
输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
```

提示：

- -2^31 <= x <= 2^31 - 1

## 解题思路

## 实现

### 字符串

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return x.toString().split("").reverse().join("") === x.toString();
};
```

### 字符串 + 双指针

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let s = x.toString();
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
};
```

### 余数重组

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let res = 0;
  let s = x;
  while (s) {
    res = res * 10 + (s % 10);
    s = Math.floor(s / 10);
  }
  return x === res;
};
```
