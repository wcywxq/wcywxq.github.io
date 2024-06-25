---
title: No.345 反转字符串中的元音字母
url: https://leetcode.cn/problems/reverse-vowels-of-a-string
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。

示例 1：

```text
输入：s = "hello"
输出："holle"
```

示例 2：

```text
输入：s = "leetcode"
输出："leotcede"
```

提示：

- 1 <= s.length <= 3 \* 10^5
- s 由 可打印的 ASCII 字符组成

## 解题思路

## 实现

### 双指针

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = "aeiouAEIOU";
  let arr = Array.from(s);
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    let lIndex = vowels.indexOf(arr[l]);
    let rIndex = vowels.indexOf(arr[r]);
    if (lIndex === -1) {
      l++;
    } else if (rIndex === -1) {
      r--;
    } else {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }
  return arr.join("");
};
```
