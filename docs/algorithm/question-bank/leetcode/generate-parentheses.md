---
title: No.22 括号生成
url: https://leetcode.cn/problems/generate-parentheses
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例 1：

```text
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
```

示例 2：

```text
输入：n = 1
输出：["()"]
```

提示：

- 1 <= n <= 8

## 解题思路

由于需要求解所有的可能，因此回溯就不难想到，回溯的思路和写法相对比较固定，并且回溯的优化手段大多是剪枝。
不难想到，如果左括号的数据小于右括号，我们可以提前退出，这就是这道题的剪枝。例如：())...，后面就不用看了，直接退出即可。回溯的退出条件也不难想到：

- 左括号数目 = 右括号数目
- 左括号数据 + 右括号数据 = 2 \* n
  因此这道题可以使用深度优先搜索（回溯思想），从空字符串开始构造，做加法，即 dfs(左括号数目，右括号数据，路径)，我们从 dfs(0, 0, "") 开始

## 实现

### 回溯

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];

  /**
   * @param l 左侧括号已经用了几个
   * @param r 右侧括号已经用了几个
   * @param str 当前递归得到的拼接字符串结果
   */
  function dfs(l, r, str) {
    if (l === n && r === n) {
      return res.push(str);
    }
    // l < r 时不满足条件，剪枝
    if (l < r) return;
    // l < n 时可插入左括号，最多可以插入 n 个
    if (l < n) {
      dfs(l + 1, r, str + "(");
    }
    // r < l 时，可以插入右括号
    if (r < l) {
      dfs(l, r + 1, str + ")");
    }
  }

  dfs(0, 0, "");

  return res;
};
```