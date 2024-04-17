---
title: 日期格式化
---

实现一个函数，根据以下情况做特定转换并输出：

- dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd') // 2020/12/01
- dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd') // 2020/04/01
- dateFormat(new Date('2020-04-01'), 'yyyy 年 MM 月 dd 日') // 2020 年 04 月 01 日

```js
function dateFormat(input, format) {
  const day = input.getDate();
  const month = input.getMonth() + 1;
  const year = input.getFullYear();
  format = format.replace(/yyyy/, year);
  format = format.replace(/MM/, month);
  format = format.replace(/dd/, day);
  return format;
}
```
