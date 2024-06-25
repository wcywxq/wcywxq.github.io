---
title: No.56 合并区间
url: https://leetcode.cn/problems/merge-intervals
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals\[i\] = \[start_i, end_i\] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

示例 1：

```text
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```

示例 2：

```text
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

提示：

- 1 <= intervals.length <= 104
- intervals\[i\].length == 2
- 0 <= start_i <= end_i <= 104

## 解题思路

## 实现

### 数组排序

```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return [];
  // 第一波排序
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= res[res.length - 1][1]) {
      // 合并区间
      res[res.length - 1][1] = Math.max(
        res[res.length - 1][1],
        intervals[i][1]
      );
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
};
```
