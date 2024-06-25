---
title: 内容中出现频率最高的字符
---

```js
function findMostWord(content) {
  // 合法性判断
  if (!content) return;

  // 参数处理
  content = content.trim().toLowerCase();

  let wordList = content.match(/[a-z]+/g);
  let visited = [];
  let maxNum = 0;
  let maxWord = "";

  content = " " + wordList.join("  ") + " ";

  // 遍历判断单词出现次数
  wordList.forEach(function (item) {
    if (visited.indexOf(item) < 0) {
      // 加入 visited
      visited.push(item);

      let word = new RegExp(" " + item + " ", "g");
      let num = content.match(word).length;

      if (num > maxNum) {
        maxNum = num;
        maxWord = item;
      }
    }
  });

  return maxWord + "  " + maxNum;
}
```
