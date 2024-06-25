---
title: No.146 LRU 缓存
url: https://leetcode.cn/problems/lru-cache
---

# <a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>

请你设计并实现一个满足 LRU (最近最少使用) 缓存 约束的数据结构。
实现 LRUCache 类：

- LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
- int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
- void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。

函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

示例：

```text
输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1); // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2); // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1); // 返回 -1 (未找到)
lRUCache.get(3); // 返回 3
lRUCache.get(4); // 返回 4
```

提示：

- 1 <= capacity <= 3000
- 0 <= key <= 10000
- 0 <= value <= 105
- 最多调用 2 \* 10^5 次 get 和 put

## 解题思路

题目要求的 1 和 2 相对简单，主要是条件 3，当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值

## 实现

### Map 方案

```js
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;
  const val = this.cache.get(key);
  // 更新位置 => 先删除后添加
  this.cache.delete(key);
  this.cache.set(key, val);
  return val;
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
  // 已经存在的情况下，更新其位置到"最新"即可 => 先删除，后插入
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }
  this.cache.set(key, value);

  if (this.cache.size > this.capacity) {
    // 如果超出 map 最大范围，找到第一个删除
    // keys() 得到一个迭代器对象
    const firstKey = this.cache.keys().next().value;
    this.cache.delete(firstKey);
  }
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
```
