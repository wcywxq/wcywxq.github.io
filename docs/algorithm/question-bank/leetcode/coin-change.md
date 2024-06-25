---
title: No.322 零钱兑换
url: https://leetcode.cn/problems/coin-change
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

示例 1：

```text
输入：coins = [1, 2, 5], amount = 11
输出：3
解释：11 = 5 + 5 + 1
```

示例 2：

```text
输入：coins = [2], amount = 3
输出：-1
```

示例 3：

```text
输入：coins = [1], amount = 0
输出：0
```

提示：

- 1 <= coins.length <= 12
- 1 <= coins\[i\] <= 2^31 - 1
- 0 <= amount <= 10^4

## 解题思路

问题转化：求可以凑成金额 i 的最少硬币个数

### 状态转移方程

```js
dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
```

## 实现

### 动态规划

:::code-group

```js [JS]
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i < amount + 1; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};
```

```py [Python]
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [amount + 1] * (amount + 1)
        dp[0] = 0

        for i in range(1, amount + 1):
            for j in range(len(coins)):
                if i>=coins[j]:
                    dp[i] = min(dp[i], dp[i-coins[j]] + 1)

        return -1 if dp[amount] > amount else dp[amount]
```

:::
