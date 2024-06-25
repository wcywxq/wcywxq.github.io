---
title: No.384 打乱数组
url: https://leetcode.cn/problems/shuffle-an-array
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。打乱后，数组的所有排列应该是 等可能 的。

实现 Solution class:

- Solution(int\[\] nums) 使用整数数组 nums 初始化对象
- int\[\] reset() 重设数组到它的初始状态并返回
- int\[\] shuffle() 返回数组随机打乱后的结果

示例 1：

```text
输入
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
输出
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

解释
Solution solution = new Solution([1, 2, 3]);
solution.shuffle(); // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
solution.reset(); // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
solution.shuffle(); // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
```

提示：

- 1 <= nums.length <= 50
- -10^6 <= nums\[i\] <= 10^6
- nums 中的所有元素都是 唯一的
- 最多可以调用 10^4 次 reset 和 shuffle

## 解题思路

## 实现

### 随机索引 + 交换元素

```js
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
  this.raw = [...this.nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.raw
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  for (let i = 0; i< this.nums.length;i++) {
    const index = Math.floor(Math.random() * (this.nums.length - i)) + i
    [this.nums[i], this.nums[index]] = [this.nums[index], this.nums[i]]
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
```

### 随机索引 + splice

```js
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
  this.raw = [...this.nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.raw;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let res = [];
  let arr = [...this.nums];
  while (arr.length > 0) {
    let idx = Math.floor(Math.random() * arr.length);
    res.push(arr.splice(idx, 1));
  }
  return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
```
