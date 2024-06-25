---
title: No.151 反转字符串中的单词
url: https://leetcode.cn/problems/reverse-words-in-a-string
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

给你一个字符串 s ，请你反转字符串中 单词 的顺序。

单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。

返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。

注意：输入字符串 s 中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

示例 1：

```text
输入：s = "the sky is blue"
输出："blue is sky the"
```

示例 2：

```text
输入：s = " hello world "
输出："world hello"
解释：反转后的字符串中不能存在前导空格和尾随空格。
```

示例 3：

```text
输入：s = "a good example"
输出："example good a"
解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
```

提示：

- 1 <= s.length <= 10^4
- s 包含英文大小写字母、数字和空格 ' '
- s 中 至少存在一个 单词

进阶：如果字符串在你使用的编程语言中是一种可变数据类型，请尝试使用 O(1) 额外空间复杂度的 原地 解法。

## 解题思路

## 实现

### 语言特性

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.split(" ").filter(Boolean).reverse().join(" ");
};
```

### 双指针

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 倒序遍历字符串
  // 1. 索引 i 从右向左搜索首个空格
  // 2. 添加单词 s[i + 1, j + 1] 到 res
  // 3. 索引 i 绕过两个单词间所有空格
  // 4. 执行 j = i
  let res = [];
  let i = s.length - 1;
  let j = i;
  while (i >= 0) {
    while (i >= 0 && s[i] !== " ") i--; // 搜索首个空格
    res.push(s.substring(i + 1, j + 1)); // 添加单词
    while (i >= 0 && s[i] === " ") i--; // 跳过单词间空格
    j = i; // 指针移动，指向下个单词的尾字符
  }
  return res.join(" ").trim();
};
```
