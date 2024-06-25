---
title: No.2 两数相加
url: https://leetcode.cn/problems/add-two-numbers
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例 1：

```text
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```

示例 2：

```text
输入：l1 = [0], l2 = [0]
输出：[0]
```

示例 3：

```text
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
```

提示：

- 每个链表中的节点数在范围 \[1, 100\] 内
- 0 <= Node.val <= 9
- 题目数据保证列表表示的数字不含前导零

## 解题思路

1. 将两个链表看作相同长度进行遍历，如果某个链表较短则在前方补 0
2. 因为每个节点只能存放一位数字，因此要考虑进位，计算结束后要更新进位值
3. 若两个链表全部遍历完成之后，进位位 1，则在新构建的链表最前方添加节点 1

## 图解

![figure_1](https://raw.githubusercontent.com/wcywxq/image-store/master/ssg/code_leetcode_No.2_figure_1.png)
![figure_2](https://raw.githubusercontent.com/wcywxq/image-store/master/ssg/code_leetcode_No.2_figure_2.png)
![figure_3](https://raw.githubusercontent.com/wcywxq/image-store/master/ssg/code_leetcode_No.2_figure_3.png)
![figure_4](https://raw.githubusercontent.com/wcywxq/image-store/master/ssg/code_leetcode_No.2_figure_4.png)
![figure_5](https://raw.githubusercontent.com/wcywxq/image-store/master/ssg/code_leetcode_No.2_figure_5.png)
![figure_6](https://raw.githubusercontent.com/wcywxq/image-store/master/ssg/code_leetcode_No.2_figure_6.png)
![figure_7](https://raw.githubusercontent.com/wcywxq/image-store/master/ssg/code_leetcode_No.2_figure_7.png)
![figure_8](https://raw.githubusercontent.com/wcywxq/image-store/master/ssg/code_leetcode_No.2_figure_8.png)

### 实现

### 构造哑节点

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const node = new ListNode(0);
  let current = node;
  let curry = 0;

  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + curry;
    curry = parseInt(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  if (curry > 0) {
    current.next = new ListNode(curry);
  }
  return node.next;
};
```
