---
title: sku 算法实现
---

已知规格数据如下：

```js
const spu = "AB1234567";

const specList = [
  ["red", "yellow"],
  ["XL", "S"],
  ["a1", "a2"],
  ["b1", "b2"],
];

// 输出结果：
// AB1234567-red-XL-a1-b1;
// AB1234567-red-XL-a1-b2;
// AB1234567-red-XL-a2-b1;
// AB1234567-red-XL-a2-b2;
// AB1234567-red-S-a1-b1;
// AB1234567-red-S-a1-b2;
// AB1234567-red-S-a2-b1;
// AB1234567-red-S-a2-b2;
// AB1234567-yellow-XL-a1-b1;
// AB1234567-yellow-XL-a1-b2;
// AB1234567-yellow-XL-a2-b1;
// AB1234567-yellow-XL-a2-b2;
// AB1234567-yellow-S-a1-b1;
// AB1234567-yellow-S-a1-b2;
// AB1234567-yellow-S-a2-b1;
// AB1234567-yellow-S-a2-b2;
```

```js
function createSKU(spu, specList) {
  return specList.reduce(
    (acc, cur) => {
      let res = [];
      for (const val of acc) {
        for (const child of cur) {
          res.push(val.concat(`-${child}`));
        }
      }
      return res;
    },
    [spu]
    // [[spu]]
  );
}

const sku = createSKU();
console.log(sku(spu, specList));
```
