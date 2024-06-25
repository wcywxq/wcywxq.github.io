---
title: No.415 字符串相加
url: https://leetcode.cn/problems/add-strings
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

给定两个字符串形式的非负整数 num1 和 num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

示例 1：

```text
输入：num1 = "11", num2 = "123"
输出："134"
```

示例 2：

```text
输入：num1 = "456", num2 = "77"
输出："533"
```

示例 3：

```text
输入：num1 = "0", num2 = "0"
输出："0"
```

提示：

- 1 <= num1.length, num2.length <= 10^4
- num1 和 num2 都只包含数字 0-9
- num1 和 num2 都不包含任何前导零

## 解题思路

```js
Number.MAX_VALUE; // 1.7976931348623157e+308
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_VALUE; // 5e-324
Number.MIN_SAFE_INTEGER; // -9007199254740991
```

如果想要对一个超大的整数 `> Number.MAX_SAFE_INTEGER` 进行加法运算，但是又想要输出为一般形式，那么使用 + 是无法做到的，因为一旦数字超过 `Number.MAX_SAFE_INTEGER` 就会被转换为科学技术法，并且数字精度相比之前会有误差。

使用算法实现大数相加：

- 首先，利用字符串的方式来保存大数，这样数字在数学表示上就不会发生变化；
- 第二步，初始化 res、temp 来保存中间的计算结果，并将两个字符串转化为数组，方便进行每一位的加法运算；
- 第三步，将两个数组的对应"位"进行相加，两个数相加的结果可能大于 10，所以可能要考虑"进位"，此时需要对 10 进行取余操作，将结果保存在当前位；
- 第四步，判断当前位是否大于 9，即判断是否会进位。如果是则将 temp 赋值为 true，因为在加法运算中，true 自动隐式转换为 1，方便下一次相加；
- 重复以上操作，直到计算出结果；

## 实现

### 大数相加

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let n1 = num1.toString().split("");
  let n2 = num2.toString().split("");
  let res = "";
  let temp = 0;
  while (n1.length || n2.length || temp) {
    temp += ~~n1.pop() + ~~n2.pop();
    res += temp % 10;
    temp = temp > 9;
  }
  return res.split("").reverse().join("");
};
```
