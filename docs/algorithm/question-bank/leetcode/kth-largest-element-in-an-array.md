---
title: No.215 数组中的第K个最大元素
url: https://leetcode.cn/problems/kth-largest-element-in-an-array
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

示例 1:

```text
输入: [3,2,1,5,6,4], k = 2
输出: 5
```

示例 2:

```text
输入: [3,2,3,1,2,4,5,5,6], k = 4
输出: 4
```

提示：

- 1 <= k <= nums.length <= 10^5
- -10^4 <= nums\[i\] <= 10^4

## 解题思路

## 实现

### 堆排序

```js
/**
 * 堆排序 - 递归实现
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function heapify(arr, index, size) {
    let max = index;
    let l = index * 2 + 1;
    let r = index * 2 + 2;

    if (l < size && arr[l] > arr[index]) {
      max = l;
    }
    if (r < size && arr[r] > arr[max]) {
      max = r;
    }
    if (max !== index) {
      [arr[index], arr[max]] = [arr[max], arr[index]];
      heapify(arr, max, size);
    }
  }

  function heapSort(arr) {
    // 最大值构建
    let size = arr.length;
    for (let i = size; i >= 0; i--) {
      heapify(arr, i, size);
    }

    while (size > 1) {
      size--;
      [arr[0], arr[size]] = [arr[size], arr[0]];
      heapify(arr, 0, size);
    }

    return arr;
  }

  return heapSort(nums)[nums.length - k];
};
```

### 快速排序

```js
/**
 * 快排
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivot = arr[(left + right) >> 1];
      let i = left;
      let j = right;
      while (i <= j) {
        while (i <= j && arr[i] < pivot) i++;
        while (i <= j && arr[j] > pivot) j--;
        if (i <= j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++;
          j--;
        }
      }
      quickSort(arr, i, right);
      quickSort(arr, left, j);
    }
    return arr;
  }
  return quickSort(nums)[nums.length - k];
};
```

```js
/**
 * 快排 - 栈溢出
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    const middleIndex = arr.length >> 1;
    const middle = arr.splice(middleIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < middle) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(middle, quickSort(right));
  };
  const result = quickSort(nums);
  return result[result.length - k];
};
```
