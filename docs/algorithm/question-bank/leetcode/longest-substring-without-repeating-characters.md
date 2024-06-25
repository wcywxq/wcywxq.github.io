---
title: No.3 无重复字符的最长子串
url: https://leetcode.cn/problems/longest-substring-without-repeating-characters
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

```text
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例 2:

```text
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

示例 3:

```text
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

## 解题思路

- 通过图解法进行判定，每当出现新的重复字符时，将重新截取子字符串。
- 截取的位置为该字符串第一次出现重复字符的位置。
- 字符串长度为 0 则直接返回

### 图解

![graphic-solution](https://raw.githubusercontent.com/wcywxq/image-store/master/ssg/code_leetcode_No.3_graphic-solution.png)

## 实现

### 游标法

```js
/**
 * 构造子串法
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let substr = "";
  let maxLen = substr.length;
  for (let i = 0; i < s.length; i++) {
    const index = substr.indexOf(s[i]);
    if (index === -1) {
      substr += s[i];
    } else {
      substr = substr.substring(index + 1) + s[i];
    }
    maxLen = Math.max(maxLen, substr.length);
  }
  return maxLen;
};
```

### 滑动窗口 + 哈希

```js
/**
 * 滑动窗口 + hash
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let maxLen = 0;
  let l = 0;
  let r = 0;
  for (; r < s.length; r++) {
    if (map.has(s[r])) {
      l = Math.max(l, map.get(s[r]) + 1);
    }
    maxLen = Math.max(maxLen, r - l + 1);
    map.set(s[r], r);
  }
  return maxLen;
};
```

## 拓展

### 返回最长的子串

#### 构造子串法

```js
function noRepeatMaxStr(s) {
  let subStr = "";
  let maxLength = subStr.length;
  let ans = [];
  for (let i = 0; i < s.length; i++) {
    let idx = subStr.indexOf(s[i]);
    if (idx === -1) {
      subStr += s[i];
    } else {
      subStr = subStr.substring(idx + 1) + s[i];
    }
    maxLength = maxLength > subStr.length ? maxLength : subStr.length;
    if (ans.indexOf(subStr) === -1) {
      ans.push(subStr);
    }
  }
  return ans.filter((val) => val.length === maxLength);
}
```

#### 滑动窗口 + 哈希

```js
function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charMap = new Map(); // 使用哈希表存储每个字符最后一次出现的位置

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    // 如果字符已存在于哈希表中，并且位置大于等于左指针，更新左指针到重复字符的下一个位置
    if (charMap.has(char) && charMap.get(char) >= start) {
      start = charMap.get(char) + 1;
    }

    // 更新当前字符在哈希表中的位置
    charMap.set(char, end);

    // 计算当前子串长度并更新最大长度
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// 输出最长子串的长度
console.log(lengthOfLongestSubstring("pwwkew")); // 输出: 3

// 若要输出最长子串本身，可以稍作修改：
function longestSubstringWithoutDuplication(s) {
  let maxLength = 0;
  let start = 0;
  let result = "";
  let charMap = new Map();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (charMap.has(char) && charMap.get(char) >= start) {
      start = charMap.get(char) + 1;
    } else {
      // 当没有重复字符时，记录下最长子串
      if (end - start + 1 > maxLength) {
        maxLength = end - start + 1;
        result = s.substring(start, end + 1);
      }
    }

    charMap.set(char, end);
  }

  return result;
}

console.log(longestSubstringWithoutDuplication("pwwkew")); // 输出: "wke"
```
