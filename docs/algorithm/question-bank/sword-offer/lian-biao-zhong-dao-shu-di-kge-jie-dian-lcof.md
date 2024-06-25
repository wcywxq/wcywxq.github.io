---
title: LCR.140 训练计划 II
subTitle: 剑指 offer 22. 链表中倒数第 k 个节点
url: https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

> {{ $frontmatter.subTitle }}

给定一个头节点为 head 的链表用于记录一系列核心肌群训练项目编号，请查找并返回倒数第 cnt 个训练项目编号。

示例 1：

```text
输入：head = [2,4,7,8], cnt = 1
输出：8
```

提示：

- 1 <= head.length <= 100
- 0 <= head\[i\] <= 100
- 1 <= cnt <= head.length

## 解题思路

## 实现

### 快慢指针

```js
/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 快指针走 cnt 步
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlan = function (head, cnt) {
  let fast = head;
  let slow = head;
  let flag = 0;
  while (fast !== null) {
    if (flag >= cnt) {
      slow = slow.next;
    }
    fast = fast.next;
    flag++;
  }
  return slow;
};
```
