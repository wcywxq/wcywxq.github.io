---
title: 图片格式转换
---

## 转换为 webp

阿里云 oss 支持通过链接后面拼接参数来做图片的格式转换，尝试实现把任意图片格式转换为 webp 格式

> 需要注意 webp 兼容性

```js
function checkWebp() {
  try {
    const canvas = document.createElement("canvas");
    return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  } catch (err) {
    return false;
  }
}

function webpImageUrl(url) {
  if (!url) {
    throw new Error("url not null");
  }
  // base64
  if (url.startsWith("data:")) {
    return url;
  }
  const supportWebp = checkWebp();
  if (!supportWebp) {
    return url;
  }
  return `${url}?x-oss-processxxx`;
}
```
