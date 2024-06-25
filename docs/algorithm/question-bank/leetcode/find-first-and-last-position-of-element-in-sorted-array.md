---
title: No.34 在排序数组中查找元素的第一个和最后一个位置
url: https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 \[-1, -1\]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

示例 1：

```text
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

示例 2：

```text
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
```

示例 3：

```text
输入：nums = [], target = 0
输出：[-1,-1]
```

提示：

- 0 <= nums.length <= 10^5
- -10^9 <= nums\[i\] <= 10^9
- nums 是一个非递减数组
- -10^9 <= target <= 10^9

## 解题思路

有序数组中的二分查找分为：求 `>=`、`>`、`<`、`<=` 这 4 种类型，可以互相转换，数组中都为整数时：

- `> x` 等价于 `>= x + 1`
- `< x` 等价于 `>= x` 的数左边的数
- `<= x` 等价于 `> x` 的数左边的数

本题是求 `>=` 和 `<=`

### 闭区间二分查找

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function lowerBound(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (nums[mid] < target) {
        left = mid + 1; // [mid + 1, right]
      } else {
        right = mid - 1; // [left, mid - 1]
      }
    }
    return left;
  }

  let start = lowerBound(nums, target);

  // 如果所有数都小于 target 或数组为空，start 等于数组的长度
  if (start === nums.length || nums[start] !== target) return [-1, -1];

  let end = lowerBound(nums, target + 1) - 1;

  // start 存在，end 一定存在
  return [start, end];
};
```

### 左闭右开区间

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function lowerBound(nums, target) {
    let left = 0;
    let right = nums.length; // 左闭右开 [left, right)
    while (left < right) {
      // 区间不为空
      let mid = (left + right) >> 1;
      if (nums[mid] < target) {
        left = mid + 1; // [mid + 1, right)
      } else {
        right = mid; // [left, mid)
      }
    }
    return left; // 或 right
  }

  let start = lowerBound(nums, target);

  // 如果所有数都小于 target 或数组为空，start 等于数组的长度
  if (start === nums.length || nums[start] !== target) return [-1, -1];

  let end = lowerBound(nums, target + 1) - 1;

  // start 存在，end 一定存在
  return [start, end];
};
```

### 左开右开

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function lowerBound(nums, target) {
    let left = -1;
    let right = nums.length; // 开区间 (left, right)
    while (left + 1 < right) {
      // 区间不为空
      let mid = (left + right) >> 1;
      if (nums[mid] < target) {
        left = mid; // (mid, right)
      } else {
        right = mid; // [left, mid)
      }
    }
    return right;
  }

  let start = lowerBound(nums, target);

  // 如果所有数都小于 target 或数组为空，start 等于数组的长度
  if (start === nums.length || nums[start] !== target) return [-1, -1];

  let end = lowerBound(nums, target + 1) - 1;

  // start 存在，end 一定存在
  return [start, end];
};
```
