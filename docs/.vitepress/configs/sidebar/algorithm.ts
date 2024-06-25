import type { DefaultTheme } from 'vitepress'

export const algorithmSidebar: DefaultTheme.Config['sidebar'] = {
  '/algorithm/base': [
    {
      text: '数据结构',
      items: [
        {
          text: '数组',
          link: '/algorithm/base/data/array'
        },
        {
          text: '链表',
          link: '/algorithm/base/data/linkedlist'
        },
        {
          text: '栈',
          link: '/algorithm/base/data/stack'
        },
        {
          text: '队列',
          link: '/algorithm/base/data/queue'
        },
        {
          text: '哈希表',
          link: '/algorithm/base/data/hashing'
        },
        {
          text: '树',
          link: '/algorithm/base/data/tree'
        },
        {
          text: '堆',
          link: '/algorithm/base/data/heap'
        },
        {
          text: '图',
          link: '/algorithm/base/data/graph'
        },
      ]
    },
    {
      text: '算法分类',
      items: [
        {
          text: '搜索',
          link: '/algorithm/base/category/searching'
        },
        {
          text: '排序',
          link: '/algorithm/base/category/sorting'
        },
        {
          text: '分治',
          link: '/algorithm/base/category/divide-and-conquer'
        },
        {
          text: '回溯',
          link: '/algorithm/base/category/backtracking'
        },
        {
          text: '动态规划',
          link: '/algorithm/base/category/dynamic-programming'
        },
        {
          text: '贪心',
          link: '/algorithm/base/category/greedy'
        },
      ]
    },
  ],
  '/algorithm/question-bank': [
    {
      text: '刷题索引',
      link: '/algorithm/question-bank/brush'
    },
    {
      text: '剑指 Offer',
      items: [
        {
          text: 'LCR.140 训练计划 II',
          link: '/algorithm/question-bank/sword-offer/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof'
        },
        {
          text: 'LCR.169 招式拆解 II',
          link: '/algorithm/question-bank/sword-offer/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof'
        },
        {
          text: 'LCR.187 破冰游戏',
          link: '/algorithm/question-bank/sword-offer/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof'
        },
      ]
    },
    {
      text: 'LeetCode',
      items: [
        {
          "text": "No.1 两数之和",
          "link": "/algorithm/question-bank/leetcode/two-sum"
        },
        {
          "text": "No.2 两数相加",
          "link": "/algorithm/question-bank/leetcode/add-two-numbers"
        },
        {
          "text": "No.3 无重复字符的最长子串",
          "link": "/algorithm/question-bank/leetcode/longest-substring-without-repeating-characters"
        },
        {
          "text": "No.4 寻找两个正序数组的中位数",
          "link": "/algorithm/question-bank/leetcode/median-of-two-sorted-arrays"
        },
        {
          "text": "No.5 最长回文子串",
          "link": "/algorithm/question-bank/leetcode/longest-palindromic-substring"
        },
        {
          "text": "No.7 整数反转",
          "link": "/algorithm/question-bank/leetcode/reverse-integer"
        },
        {
          "text": "No.9 回文数",
          "link": "/algorithm/question-bank/leetcode/palindrome-number"
        },
        {
          "text": "No.14 最长公共前缀",
          "link": "/algorithm/question-bank/leetcode/longest-common-prefix"
        },
        {
          "text": "No.15 三数之和",
          "link": "/algorithm/question-bank/leetcode/3sum"
        },
        {
          "text": "No.20 有效的括号",
          "link": "/algorithm/question-bank/leetcode/valid-parentheses"
        },
        {
          "text": "No.21 合并两个有序链表",
          "link": "/algorithm/question-bank/leetcode/merge-two-sorted-lists"
        },
        {
          "text": "No.22 括号生成",
          "link": "/algorithm/question-bank/leetcode/generate-parentheses"
        },
        {
          "text": "No.23 合并 K 个升序链表",
          "link": "/algorithm/question-bank/leetcode/merge-k-sorted-lists"
        },
        {
          "text": "No.24 两两交换链表中的节点",
          "link": "/algorithm/question-bank/leetcode/swap-nodes-in-pairs"
        },
        {
          "text": "No.25 K 个一组翻转链表",
          "link": "/algorithm/question-bank/leetcode/reverse-nodes-in-k-group"
        },
        {
          "text": "No.31 下一个排列",
          "link": "/algorithm/question-bank/leetcode/next-permutation"
        },
        {
          "text": "No.32 最长有效括号",
          "link": "/algorithm/question-bank/leetcode/longest-valid-parentheses"
        },
        {
          "text": "No.33 搜索旋转排序数组",
          "link": "/algorithm/question-bank/leetcode/search-in-rotated-sorted-array"
        },
        {
          "text": "No.34 在排序数组中查找元素的第一个和最后一个位置",
          "link": "/algorithm/question-bank/leetcode/find-first-and-last-position-of-element-in-sorted-array"
        },
        {
          "text": "No.39 组合求和",
          "link": "/algorithm/question-bank/leetcode/combination-sum"
        },
        {
          "text": "No.42 接雨水",
          "link": "/algorithm/question-bank/leetcode/trapping-rain-water"
        },
        {
          "text": "No.46 全排列",
          "link": "/algorithm/question-bank/leetcode/permutations"
        },
        {
          "text": "No.53 最大子序和",
          "link": "/algorithm/question-bank/leetcode/maximum-subarray"
        },
        {
          "text": "No.56 合并区间",
          "link": "/algorithm/question-bank/leetcode/merge-intervals"
        },
        {
          "text": "No.67 二进制求和",
          "link": "/algorithm/question-bank/leetcode/add-binary"
        },
        {
          "text": "No.69 x 的平方根",
          "link": "/algorithm/question-bank/leetcode/sqrtx"
        },
        {
          "text": "No.70 爬楼梯",
          "link": "/algorithm/question-bank/leetcode/climbing-stairs"
        },
        {
          "text": "No.88 合并两个有序数组",
          "link": "/algorithm/question-bank/leetcode/merge-sorted-array"
        },
        {
          "text": "No.92 反转链表 II",
          "link": "/algorithm/question-bank/leetcode/reverse-linked-list-ii"
        },
        {
          "text": "No.94 二叉树的中序遍历",
          "link": "/algorithm/question-bank/leetcode/binary-tree-inorder-traversal"
        },
        {
          "text": "No.101 对称二叉树",
          "link": "/algorithm/question-bank/leetcode/symmetric-tree"
        },
        {
          "text": "No.102 二叉树的层序遍历",
          "link": "/algorithm/question-bank/leetcode/binary-tree-level-order-traversal"
        },
        {
          "text": "No.104 二叉树的最大深度",
          "link": "/algorithm/question-bank/leetcode/maximum-depth-of-binary-tree"
        },
        {
          "text": "No.111 二叉树的最小深度",
          "link": "/algorithm/question-bank/leetcode/minimum-depth-of-binary-tree"
        },
        {
          "text": "No.112 路径总和",
          "link": "/algorithm/question-bank/leetcode/path-sum"
        },
        {
          "text": "No.121 买股票的最佳时机",
          "link": "/algorithm/question-bank/leetcode/best-time-to-buy-and-sell-stock"
        },
        {
          "text": "No.129 求根到叶子节点数字之和",
          "link": "/algorithm/question-bank/leetcode/sum-root-to-leaf-numbers"
        },
        {
          "text": "No.136 只出现一次的数字",
          "link": "/algorithm/question-bank/leetcode/single-number"
        },
        {
          "text": "No.141 环型链表",
          "link": "/algorithm/question-bank/leetcode/linked-list-cycle"
        },
        {
          "text": "No.146 LRU 缓存",
          "link": "/algorithm/question-bank/leetcode/lru-cache"
        },
        {
          "text": "No.151 反转字符串中的单词",
          "link": "/algorithm/question-bank/leetcode/reverse-words-in-a-string"
        },
        {
          "text": "No.153 寻找旋转排序数组中的最小值",
          "link": "/algorithm/question-bank/leetcode/find-minimum-in-rotated-sorted-array"
        },
        {
          "text": "No.155 最小栈",
          "link": "/algorithm/question-bank/leetcode/min-stack"
        },
        {
          "text": "No.160 相交链表",
          "link": "/algorithm/question-bank/leetcode/intersection-of-two-linked-lists"
        },
        {
          "text": "No.162 寻找峰值",
          "link": "/algorithm/question-bank/leetcode/find-peak-element"
        },
        {
          "text": "No.165 比较版本号",
          "link": "/algorithm/question-bank/leetcode/compare-version-numbers"
        },
        {
          "text": "No.169 多数元素",
          "link": "/algorithm/question-bank/leetcode/majority-element"
        },
        {
          "text": "No.200 岛屿数量",
          "link": "/algorithm/question-bank/leetcode/number-of-islands"
        },
        {
          "text": "No.206 反转链表",
          "link": "/algorithm/question-bank/leetcode/reverse-linked-list"
        },
        {
          "text": "No.209 长度最小的子数组",
          "link": "/algorithm/question-bank/leetcode/minimum-size-subarray-sum"
        },
        {
          "text": "No.215 数组中的第K个最大元素",
          "link": "/algorithm/question-bank/leetcode/kth-largest-element-in-an-array"
        },
        {
          "text": "No.226 翻转二叉树",
          "link": "/algorithm/question-bank/leetcode/invert-binary-tree"
        },
        {
          "text": "No.238 除自身以外数组的乘积",
          "link": "/algorithm/question-bank/leetcode/product-of-array-except-self"
        },
        {
          "text": "No.300 最长递增子序列",
          "link": "/algorithm/question-bank/leetcode/longest-increasing-subsequence"
        },
        {
          "text": "No.322 零钱兑换",
          "link": "/algorithm/question-bank/leetcode/coin-change"
        },
        {
          "text": "No.334 递增的三元子序列",
          "link": "/algorithm/question-bank/leetcode/increasing-triplet-subsequence"
        },
        {
          "text": "No.344 反转字符串",
          "link": "/algorithm/question-bank/leetcode/reverse-string"
        },
        {
          "text": "No.345 反转字符串中的元音字母",
          "link": "/algorithm/question-bank/leetcode/reverse-vowels-of-a-string"
        },
        {
          "text": "No.384 打乱数组",
          "link": "/algorithm/question-bank/leetcode/shuffle-an-array"
        },
        {
          "text": "No.415 字符串相加",
          "link": "/algorithm/question-bank/leetcode/add-strings"
        },
        {
          "text": "No.443 压缩字符串",
          "link": "/algorithm/question-bank/leetcode/string-compression"
        },
        {
          "text": "No.509 斐波那契数",
          "link": "/algorithm/question-bank/leetcode/fibonacci-number"
        },
        {
          "text": "No.605 种花问题",
          "link": "/algorithm/question-bank/leetcode/can-place-flowers"
        },
        {
          "text": "No.617 合并二叉树",
          "link": "/algorithm/question-bank/leetcode/merge-two-binary-trees"
        },
        {
          "text": "No.678 有效的括号字符串",
          "link": "/algorithm/question-bank/leetcode/valid-parenthesis-string"
        },
        {
          "text": "No.704 二分查找",
          "link": "/algorithm/question-bank/leetcode/binary-search"
        },
        {
          "text": "No.912 排序数组",
          "link": "/algorithm/question-bank/leetcode/sort-an-array"
        },
        {
          "text": "No.1071 字符串的最大公因子",
          "link": "/algorithm/question-bank/leetcode/greatest-common-divisor-of-strings"
        },
        {
          "text": "No.1143 最长公共子序列",
          "link": "/algorithm/question-bank/leetcode/longest-common-subsequence"
        },
        {
          "text": "No.1431 拥有最多糖果的孩子",
          "link": "/algorithm/question-bank/leetcode/kids-with-the-greatest-number-of-candies"
        },
        {
          "text": "No.1768 交替合并字符串",
          "link": "/algorithm/question-bank/leetcode/merge-strings-alternately"
        }
      ]
    }
  ],
}
