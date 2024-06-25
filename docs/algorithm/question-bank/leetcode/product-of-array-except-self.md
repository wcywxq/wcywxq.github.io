---
title: No.238 除自身以外数组的乘积
url: https://leetcode.cn/problems/product-of-array-except-self
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

给你一个整数数组 nums，返回 数组 answer ，其中 answer\[i\] 等于 nums 中除 nums\[i\] 之外其余各元素的乘积 。

题目数据 保证 数组 nums 之中任意元素的全部前缀元素和后缀的乘积都在 32 位 整数范围内。

请不要使用除法，且在 O(n) 时间复杂度内完成此题。

示例 1:

```text
输入: nums = [1,2,3,4]
输出: [24,12,8,6]
```

示例 2:

```text
输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
```

提示：

- 2 <= nums.length <= 10^5
- -30 <= nums\[i\] <= 30

保证 数组 nums 之中任意元素的全部前缀元素和后缀的乘积都在 32 位 整数范围内

进阶：你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组 不被视为 额外空间。）

## 解题思路

## 实现

### 前缀和 - 左右列表乘积法

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let len = nums.length;
  const L = new Array(len);
  const R = new Array(len);
  const ans = new Array(len);

  // L[i] 表示 i 左侧所有元素乘积
  L[0] = 1;
  for (let i = 1; i < len; i++) {
    L[i] = L[i - 1] * nums[i - 1];
  }

  // R[i] 表示 i 右侧所有元素乘积
  R[len - 1] = 1;
  for (let i = len - 2; i >= 0; i--) {
    R[i] = R[i + 1] * nums[i + 1];
  }

  // 除 i 外其他元素乘积 = L * R
  for (let i = 0; i < len; i++) {
    ans[i] = L[i] * R[i];
  }

  return ans;
};
```

### 优化空间复杂度 O(1)

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 将 L 或 R 数组用输出数组来计算
  let len = nums.length;
  let ans = new Array(len);

  // ans[i] 表示 i 左侧所有元素的乘积，刚开始 i = 0 左侧无元素，因此 = 1
  ans[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    ans[i] = ans[i - 1] * nums[i - 1];
  }
  // R 为右侧所有元素的乘积，刚开始右边无元素，因此 = 1
  let R = 1;
  for (let i = len - 1; i >= 0; i--) {
    // 对于索引 i，左边乘积为 ans[i]，右边为 R
    ans[i] *= R;
    // R 需要包含右边所有乘积，所以要累乘
    R *= nums[i];
  }
  return ans;
};
```
