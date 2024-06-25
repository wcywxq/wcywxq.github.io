---
title: No.136 只出现一次的数字
url: https://leetcode.cn/problems/single-number
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。

示例 1 ：

```text
输入：nums = [2,2,1]
输出：1
```

示例 2 ：

```text
输入：nums = [4,1,2,1,2]
输出：4
```

示例 3 ：

```text
输入：nums = [1]
输出：1
```

提示：

- 1 <= nums.length <= 3 \* 10^4
- -3 \* 10^4 <= nums\[i\] <= 3 \* 10^4
- 除了某个元素只出现一次以外，其余每个元素均出现两次。

## 解题思路

异或满足以下行为：

- a ^ 0 = a；
- a ^ a = 0；
- a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b

## 实现

### 异或

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0;
  for (let num of nums) {
    ans ^= num;
  }
  return ans;
};
```
