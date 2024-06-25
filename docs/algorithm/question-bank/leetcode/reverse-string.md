---
title: No.344 反转字符串
url: https://leetcode.cn/problems/reverse-string
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

示例 1：

```text
输入：s = ["h","e","l","l","o"]
输出：["o","l","l","e","h"]
```

示例 2：

```text
输入：s = ["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
```

提示：

- 1 <= s.length <= 10^5
- s\[i\] 都是 ASCII 码表中的可打印字符

## 解题思路

## 实现

### 双指针

```js
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};
```
