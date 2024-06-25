---
title: 倒计时
---

```js
const totalDuration = 10 * 1000;
let requestRef = null;
let startTime;
let prevEndTime;
let prevTime;
let currentCount = totalDuration;
let endTime;
let timeDiffer = 0; // 每1s倒计时偏差值，单位ms
let interval = 1000;
let nextTime = interval;

setInterval(() => {
  let n = 0;
  while (n++ < 1000000000);
}, 0);

const animate = (timestamp) => {
  if (prevTime !== undefined) {
    const deltaTime = timestamp - prevTime;
    if (deltaTime >= nextTime) {
      prevTime = timestamp;
      prevEndTime = endTime;
      endTime = new Date().getTime();
      currentCount = currentCount - 1000;
      console.log("currentCount: ", currentCount / 1000);
      timeDiffer = endTime - startTime - (totalDuration - currentCount);
      console.log(timeDiffer);
      nextTime = interval - timeDiffer;
      // 慢太多了，就立刻执行下一个循环
      if (nextTime < 0) {
        nextTime = 0;
      }
      console.log(`执行下一次渲染的时间是：${nextTime}ms`);
      if (currentCount <= 0) {
        currentCount = 0;
        cancelAnimationFrame(requestRef);
        console.log(`累计偏差值： ${endTime - startTime - totalDuration}ms`);
        return;
      }
    }
  } else {
    startTime = new Date().getTime();
    prevTime = timestamp;
    endTime = new Date().getTime();
  }
  requestRef = requestAnimationFrame(animate);
};

requestRef = requestAnimationFrame(animate);
```
