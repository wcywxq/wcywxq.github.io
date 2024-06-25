---
title: No.46 全排列
url: https://leetcode.cn/problems/permutations
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

示例 1：

```text
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

示例 2：

```text
输入：nums = [0,1]
输出：[[0,1],[1,0]]
```

示例 3：

```text
输入：nums = [1]
输出：[[1]]
```

提示：

- 1 <= nums.length <= 6
- -10 <= nums\[i\] <= 10
- nums 中的所有整数 互不相同

## 解题思路

## 实现

### 回溯

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let path = [];
  const dfs = () => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let num of nums) {
      if (!path.includes(num)) {
        path.push(num);
        dfs();
        path.pop();
      }
    }
  };
  dfs();
  return res;
};
```
