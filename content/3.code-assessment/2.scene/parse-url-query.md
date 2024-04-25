---
title: 解析 url 参数
---

## 正则 + exec

```js
function parseUrlQuery(url) {
  const reg = /(?:&|\/?)(\w+)=([^&$]+)/g;
  const params = {};
  while ((result = reg.exec(url))) {
    params[result[1]] = result[2];
  }
  return params;
}
```

## 正则 + match

```js
function parseUrlQuery(url) {
  const queryNameRegex = new RegExp(`[?&]${name}=([^&]*)(&|$)`);
  const queryNameMatch = window.location.search.match(queryNameRegex);
  // 一般都会通过 decodeURIComponent 解码处理
  return queryNameMatch ? decodeURIComponent(queryNameMatch[1]) : "";
}

// https://www.baidu.com/?name=%E5%89%8D%E7%AB%AF%E8%83%96%E5%A4%B4%E9%B1%BC&sex=boy
console.log(getQueryByName("name"), getQueryByName("sex"));
```
