---
title: 实现并发调度器
---

## 案例 1

- 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个。

```js
// 完善下面代码的 Scheduler 类，使以下程序能够正常输出：
class Scheduler {
  add(promiseCreator) { ... }
  // ...
}

const timeout = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

const scheduler = new Scheduler()

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')

// output: 2 3 1 4
// 整个的完整执行流程：

// 起始 1、2 两个任务开始执行
// 500ms 时，2 任务执行完毕，输出 2，任务 3 开始执行
// 800ms 时，3 任务执行完毕，输出 3，任务 4 开始执行
// 1000ms 时，1 任务执行完毕，输出 1，此时只剩下 4 任务在执行
// 1200ms 时，4 任务执行完毕，输出 4
```

- 解析

> 如何才能保证同时只有 2 个任务在处于执行中？
>
> - 只需要用一个计数器来控制即可，每开始一个任务计数器 +1，结束之后计数器 -1，保证计数器一定 <=2

> 当某个任务执行结束之后，下一步如何知道应该执行哪个任务？
>
> - 按照题目要求，任务的执行是有顺序的，只是任务的结束时间是不确定的，所以下一个任务一定是按照这样的顺序来
> - 任务1 => 任务2 => 任务3 => 任务4
> - 利用数组队列的性质，将任务挨个推入队列，前面的任务执行结束之后，将队首的任务取出来执行即可

- 实现

```js
class Scheduler {
  constructor() {
    this.queue = []
    this.maxCount = 2
    this.runCount = 0
  }
  // promiseCreator执行后返回的是一个Promise
  add(promiseCreator) {
    // 小于等于2，直接执行
    this.queue.push(promiseCreator)
    // 每次添加的时候都会尝试去执行任务
    this.runQueue()
  }

  runQueue() {
    // 队列中还有任务才会被执行
    if (this.queue.length && this.runCount < this.maxCount) {
      // 执行先加入队列的函数
      const promiseCreator = this.queue.shift()
      // 开始执行任务 计数 +1
      this.runCount += 1
      // 假设任务都执行成功，当然也可以做一下catch
      promiseCreator().then(() => {
        // 任务执行完毕，计数-1
        this.runCount -= 1
        // 尝试进行下一次任务
        this.runQueue()
      })
    }
  }
}

const timeout = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

const scheduler = new Scheduler()

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')

// 2
// 3
// 1
// 4
```

- 另一种实现

```js
class Scheduler {
  constructor() {
    this.waitTasks = []; // 待执行的任务队列
    this.executingTasks = []; // 正在执行的任务队列
    this.maxExecutingNum = 2; // 允许同时运行的任务数量
  }

  add(promiseMaker) {
    if (this.excutingTasks.length < this.maxExecutingNum) {
      this.run(promiseMaker);
    } else {
      this.waitTasks.push(promiseMaker);
    }
  }

  run(promiseMaker) {
    const len = this.executingTasks.push(promiseMaker);
    const index = len - 1;
    promiseMaker().then(() => {
      this.executingTasks.splice(index, 1);
      if (this.waitTasks.length > 0) {
        this.run(this.waitTasks.shift());
      }
    });
  }
}
```

## 案例 2

根据输出实现

```js
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// 创建一个并发量上限为 2 的调度器
const scheduler = new Scheduler(2);

scheduler
  .addTask(() => {
    return sleep(1000).then(() => 1);
  })
  .then((res) => {
    // 预期结果为 1
    // 第 1 秒输出结果
    console.log(res);
  });

scheduler
  .addTask(() => {
    return sleep(3000).then(() => 2);
  })
  .then((res) => {
    // 预期结果为 2
    // 第 3 秒输出结果
    console.log(res);
  });

scheduler
  .addTask(() => {
    return sleep(2000).then(() => 3);
  })
  .then((res) => {
    // 预期结果为 3
    // 第 2 秒输出结果
    console.log(res);
  });
```

## 实现

```js
class Scheduler {
}
```
