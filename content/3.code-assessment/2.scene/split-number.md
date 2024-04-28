---
title: 整数分割
---

对数字 n, 使用 <= m 的整数分隔，请输出所有可能的情况

- 例：n = 6, m = 4, print_partitions(6, 4)

```text
4 + 2
4 + 1 + 1
3 + 3
3 + 2 + 1
3 + 1 + 1 + 1
2 + 2 + 2
2 + 2 + 1 + 1
2 + 1 + 1 + 1 + 1
1 + 1 + 1 + 1 + 1 + 1
```

## 回溯法

```js
function printPartitions(n, m) {
  let result = []

  function backtrack(start, current, str) {
    if (current === n) {
      result.push(str)
      return
    }

    for (let i = start; i <= Math.min(m, n - current); i++) {
      backtrack(i, current + i, (str ? str + ' + ' : '') + i)
    }
  }

  backtrack(1, 0, '')

  return result
}

console.log(printPartitions(6, 4))
```
