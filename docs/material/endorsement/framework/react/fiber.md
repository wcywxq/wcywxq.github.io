# Fiber

::: tip 简述

- React15 的 `Stack Reconciler` 方案由于递归不可中断问题，如果 Diff 时间过长（JS 计算时间），会造成页面 UI 的无响应（比如输入框）的表现，vdom 无法应用到 dom 中。
- 为了解决这个问题，React16 实现了新的基于 requestIdleCallback 的调度器（因为 requestIdleCallback 兼容性和稳定性问题，自己实现了 polyfill），通过任务优先级的思想，在高优先级任务进入的时候，中断 reconciler。
- 为了适配这种新的调度器，推出了 `Fiber Reconciler`，将原来的树形结构（vdom）转换成 Fiber 链表的形式（child/sibling/return），整个 Fiber 的遍历是基于**循环**而**非递归**，可以随时中断。
- 更加核心的是，基于 Fiber 的链表结构，对于后续（React 17 Lane 架构）的异步渲染和 （可能存在的）worker 计算都有非常好的应用基础
:::

## Fiber 的含义

Fiber 具有三层含义：

- **架构**

::: tip

- React 15 的 Reconciler（协调器）采用递归的方式进行，数据保存在递归调用栈中，所以被称为：`Stack Reconciler`
- React 16 的 Reconciler（协调器）基于 Fiber 节点实现，被称为：`Fiber Reconciler`
:::

- **静态数据结构**

::: tip
每个 Fiber 节点 对应一个 React element，保存了该组件的类型（函数组件/类组件/原生组件...）、对应的 DOM 节点等信息
:::

- **动态工作单元**

::: tip
每个 Fiber 节点都保存了本次更新中该组件改变的状态、要执行的工作（需要被删除/被插入页面中/被更新...）
:::

::: info Fiber Reconciler 的主要作用

1. 能够把可中断的任务切片处理
2. 能够调整优先级，重置并复用任务
3. 能够在父元素与子元素之间交错处理，以支持 React 中的布局
4. 能够在 render() 中返回多个元素
5. 可以更好地支持错误边界
:::

## Fiber 的数据结构

在 Fiber 上主要的标识分为：**DOM**、**Fiber tree**、**状态数据**、**副作用**

```ts
function FiberNode(
  tag: WorkTag, // /react-reconciler/src/ReactWorkTags.js
  pendingProps: mixed,
  key: null | string,
  mode: TypeOfMode,
) {
  /*! --------------- 作为静态数据结构 --------------- */
  this.tag = tag // Fiber 对应组件的类型
  this.key = key // key
  this.elementType = null // 大部分情况同 type，某些情况不同，比如 FunctionComponent 使用 React.memo 包裹
  this.type = null
  this.stateNode = null

  /*! --------------- 作为 Fiber 架构 --------------- */
  this.return = null // 指向父级 Fiber 节点
  this.child = null // 指向第一个子 Fiber 节点
  this.sibling = null // 指向下一个兄弟 Fiber 节点
  this.index = 0

  this.ref = null

  /*! -------------- 作为动态的工作单元 --------------- */
  // 保存本次更新造成的状态改变相关信息
  this.pendingProps = pendingProps
  this.memoizedProps = null
  this.updateQueue = null
  this.memoizedState = null
  this.dependencies = null

  this.mode = mode

  // Effects 副作用相关
  this.flags = NoFlags
  this.subtreeFlags = NoFlags
  this.deletions = null

  // 调度优先级相关
  this.lanes = NoLanes
  this.childLanes = NoLanes

  // 指向该 Fiber 节点对应的双缓存 Fiber 节点
  this.alternate = null
}
```

::: tip

- return 指向父级 Fiber 节点；child 指向第一个子 Fiber 节点；sibling 指向下一个兄弟 Fiber 节点
- type 具有 3 种含义：FunctionComponent 指函数本身；ClassComponent 指 class；HostComponent 指 DOM 节点的 tagName
- stateNode 代表 Fiber 对应的真实 DOM 节点
- updateQueue 指向其对应的更新队列，它的结构是一个链表且具有 first 和 last 两个属性，指向第一个和最后一个 update 对象
- 每个 Fiber 都有一个 alternate 属性，开始时指向自己的一个 clone，更新的变化会更新到 alternate 上，当更新完毕后，使用 alternate 替换当前 Fiber
:::

## Fiber 双缓存

## 优先级分类

React 中的优先级管理是通过 Schedule 调度器和 Fiber 架构实现。Schedule 调度器负责管理任务的执行顺序，Fiber 架构则用于表示和管理组件树的更新。

::: tip Lane 优先级

- SyncLane：同步优先级，立即执行的更新，例如用户输入。
- InputContinuousLane：输入连续性优先级，用于确保输入的连贯性，如拖动操作。
- DefaultLane：默认优先级，通常用于正常的状态更新。
- TransitionLane：过渡优先级，用于异步更新，如 Suspense 和并发模式中的更新。
- IdleLane：空闲优先级，仅在主线程完全空闲时执行。
:::

::: tip React 事件优先级

- Discrete Events：离散事件，例如点击、按键等，这些事件需要立即响应。
- Continuous Events：连续事件，例如滚动、鼠标移动等，这些事件需要持续响应。
- Default Events：默认事件，例如一些不太紧急的状态更新，setTimeout触发的更新任务。
- Idle Events：闲置事件，优先级最低
:::

::: tip Schedule 优先级

- Immediate Priority：立即优先级，最高优先级的任务，必须立即执行。
- User Blocking Priority：用户阻塞优先级，需要尽快完成以确保用户体验流畅。
- Normal Priority：正常优先级，普通的任务，稍微延迟也没关系。
- Low Priority：低优先级，可以显著延迟的任务。
- Idle Priority：空闲优先级，仅在主线程完全空闲时执行的任务。
:::

### Lane 优先级

在 React 中，Lane 是用来标识更新优先级的**位掩码**，它可以在频繁运算的时候**占用内存少**，**计算速度快**。每个 Lane 代表一种优先级级别，React 可以同时处理多个 lane，通过这种方式来管理不同优先级的任务。

::: info
回想一下我们学校的操场，是不是分为了多个跑道，跑道越往内，距离越近，Lane 模型借助了这个概念，将其分为了 31 个赛道,其中位数越少的赛道，也就是 1 越往右的赛道有优先级就越高，某些相邻的赛道拥有相同的优先级，称为赛道组。
:::

在 v18 版本中，React 有 31 中 lane，如下代码所示：

```js
export const TotalLanes = 31;

//  表示没有车道,所有为都为0
export const NoLanes: Lanes = /*                        */ 0b0000000000000000000000000000000;
export const NoLane: Lane = /*                          */ 0b0000000000000000000000000000000;

// 同步车道,优先级最高
export const SyncLane: Lane = /*                        */ 0b0000000000000000000000000000001;

// 连续输入注水车道
export const InputContinuousHydrationLane: Lane = /*    */ 0b0000000000000000000000000000010;
export const InputContinuousLane: Lane = /*             */ 0b0000000000000000000000000000100;

// 默认注水,默认车道
export const DefaultHydrationLane: Lane = /*            */ 0b0000000000000000000000000001000;
export const DefaultLane: Lane = /*                     */ 0b0000000000000000000000000010000;

// 事务注水车道
const TransitionHydrationLane: Lane = /*                */ 0b0000000000000000000000000100000;

// 事务车道 16条
const TransitionLanes: Lanes = /*                       */ 0b0000000001111111111111111000000;

const TransitionLane1: Lane = /*                        */ 0b0000000000000000000000001000000;
const TransitionLane2: Lane = /*                        */ 0b0000000000000000000000010000000;
const TransitionLane3: Lane = /*                        */ 0b0000000000000000000000100000000;
const TransitionLane4: Lane = /*                        */ 0b0000000000000000000001000000000;
const TransitionLane5: Lane = /*                        */ 0b0000000000000000000010000000000;
const TransitionLane6: Lane = /*                        */ 0b0000000000000000000100000000000;
const TransitionLane7: Lane = /*                        */ 0b0000000000000000001000000000000;
const TransitionLane8: Lane = /*                        */ 0b0000000000000000010000000000000;
const TransitionLane9: Lane = /*                        */ 0b0000000000000000100000000000000;
const TransitionLane10: Lane = /*                       */ 0b0000000000000001000000000000000;
const TransitionLane11: Lane = /*                       */ 0b0000000000000010000000000000000;
const TransitionLane12: Lane = /*                       */ 0b0000000000000100000000000000000;
const TransitionLane13: Lane = /*                       */ 0b0000000000001000000000000000000;
const TransitionLane14: Lane = /*                       */ 0b0000000000010000000000000000000;
const TransitionLane15: Lane = /*                       */ 0b0000000000100000000000000000000;
const TransitionLane16: Lane = /*                       */ 0b0000000001000000000000000000000;

// 重试车道
const RetryLanes: Lanes = /*                            */ 0b0000111110000000000000000000000;
const RetryLane1: Lane = /*                             */ 0b0000000010000000000000000000000;
const RetryLane2: Lane = /*                             */ 0b0000000100000000000000000000000;
const RetryLane3: Lane = /*                             */ 0b0000001000000000000000000000000;
const RetryLane4: Lane = /*                             */ 0b0000010000000000000000000000000;
const RetryLane5: Lane = /*                             */ 0b0000100000000000000000000000000;

export const SomeRetryLane: Lane = RetryLane1;

// 选着性注水车道
export const SelectiveHydrationLane: Lane = /*          */ 0b0001000000000000000000000000000;

// 非空闲车道
const NonIdleLanes: Lanes = /*                          */ 0b0001111111111111111111111111111;

// 空闲注水车道和空闲车道
export const IdleHydrationLane: Lane = /*               */ 0b0010000000000000000000000000000;
export const IdleLane: Lane = /*                        */ 0b0100000000000000000000000000000;

// 离屏渲染车道
export const OffscreenLane: Lane = /*                   */ 0b1000000000000000000000000000000;
```

如果把所有的 Lane 从低位到高位排列到一块，我们就能看到这些数字会从低位到高位依次出现在对应的位置上。

特别关注一下上面优先级中的过渡优先级：

```js
const TransitionLanes: Lanes = /*                       */ 0b0000000001111111111111111000000;
```

过渡优先级分配规则是：分配优先级时，会从过渡优先级的最右边开始分配，后续产生的任务则会依次向左移动一位，直到最后一个位置被分配后，后面的任务会从最右边第一个位置再开始做分配

当前产生了一个任务 1，那么会分配过渡优先级的最右边第一个位置：

```js
TransitionLane1 = 0b0000000000000000000000001000000;
```

现在又产生了任务 2，那么则从 A 的位置向左移动一位：

```js
TransitionLane2 = 0b0000000000000000000000010000000;
```

后续产生的任务则会依次向左移动一位，过渡优先级共有 16 位:

```js
TransitionLanes = 0b0000000001111111111111111000000;
```

在复杂的 React 应用中，可能同时存在多个过渡任务，这些任务可能属于不同的优先级。通过合并多个 TransitionLane，React 调度器可以灵活地处理这些任务，而不需要分别调度每个优先级的任务。

合并优先级 Lane 可以减少调度器的开销。调度器可以一次性检查多个优先级的任务，避免了多次遍历任务队列，从而提高性能。

::: details 举例

假设我们有以下几个过渡优先级 lane：

```js
const TransitionLane1 = 0b0000000000000000000000000010000; // 16
const TransitionLane2 = 0b0000000000000000000000000100000; // 32
const TransitionLane3 = 0b0000000000000000000000001000000; // 64
const TransitionLane4 = 0b0000000000000000000000010000000; // 128
```

每个位表示一个独立的优先级 Lane。通过按位或（OR）操作，可以将多个优先级 Lane 合并在一起：

```js
const combinedTransitionLanes = TransitionLane1 | TransitionLane2;
```

combinedTransitionLanes 的值是 0b0000000000000000000000000110000，表示同时包含 TransitionLane1 和 TransitionLane2。

除此之外，我们可以通过按位与（AND）操作来判断某个任务是否属于某个优先级 lane，并通过按位与非（AND NOT）操作来删除某个优先级 lane。

```js
const TransitionLane1 = 0b0000000000000000000000000010000; // 16
const TransitionLane2 = 0b0000000000000000000000000100000; // 32
const TransitionLane3 = 0b0000000000000000000000001000000; // 64
const TransitionLane4 = 0b0000000000000000000000010000000; // 128

const TransitionLanes = 0b0000000001111111111111111000000;

// 判断某个任务是否属于任务组
const isInTransitionLanes1 = (TransitionLanes & TransitionLane1) !== 0;
console.log(`TransitionLane1 属于任务组: ${isInTransitionLanes1}`); // 输出 true 或 false

const isInTransitionLanes2 = (TransitionLanes & TransitionLane2) !== 0;
console.log(`TransitionLane2 属于任务组: ${isInTransitionLanes2}`); // 输出 true 或 false

const isInTransitionLanes3 = (TransitionLanes & TransitionLane3) !== 0;
console.log(`TransitionLane3 属于任务组: ${isInTransitionLanes3}`); // 输出 true 或 false

const isInTransitionLanes4 = (TransitionLanes & TransitionLane4) !== 0;
console.log(`TransitionLane4 属于任务组: ${isInTransitionLanes4}`); // 输出 true 或 false

// 删除某个过渡任务
const removedTransitionLane1 = TransitionLanes & ~TransitionLane1;
console.log(
  `删除 TransitionLane1 后的任务组: ${removedTransitionLane1.toString(2)}`
);

const removedTransitionLane2 = TransitionLanes & ~TransitionLane2;
console.log(
  `删除 TransitionLane2 后的任务组: ${removedTransitionLane2.toString(2)}`
);
```

:::

Lane 的基本运算就是一些基础的集合运行，主要有以下这些函数：

```js
// src/react/packages/react-reconciler/src/ReactFiberLane.old.js

// 获取指定 Lanes 中的任意一个 Lane 的索引
function pickArbitraryLaneIndex(lanes: Lanes) {
  return 31 - clz32(lanes);
}

// 将单个 Lane 转换为其索引
function laneToIndex(lane: Lane) {
  return pickArbitraryLaneIndex(lane);
}

// 判断两个 lanes 集合之间是否有交集
export function includesSomeLane(a: Lanes | Lane, b: Lanes | Lane) {
  return (a & b) !== NoLanes;
}

// 判断两个 lanes 集合是否是父子集的关系
export function isSubsetOfLanes(set: Lanes, subset: Lanes | Lane) {
  return (set & subset) === subset;
}

// 合并两个 lanes 集合
export function mergeLanes(a: Lanes | Lane, b: Lanes | Lane): Lanes {
  return a | b;
}

// 从一个 lanes 集合中把某个 lane 或者 lanes 集合给移除掉，相当于求一个集合的补集
export function removeLanes(set: Lanes, subset: Lanes | Lane): Lanes {
  return set & ~subset;
}

// 求两个 lanes 集合的交集
export function intersectLanes(a: Lanes | Lane, b: Lanes | Lane): Lanes {
  return a & b;
}
```

### React 事件优先级

React 事件优先级（Event Priorities）是 React 调度机制的一部分，用于管理和协调用户事件的处理顺序。通过为不同类型的事件分配不同的优先级，React 可以确保关键事件得到及时处理，而低优先级的事件可以在不影响用户体验的情况下延迟处理。

React 事件优先级主要分为以下几类：

- `Discrete Events - 离散事件`：立即响应的用户交互事件，例如点击、按键。这些事件需要快速响应，不能被延迟处理。
- `Continuous Events - 连续事件`：需要持续响应的事件，例如滚动、拖动。这些事件可以被分段处理，确保流畅的用户体验。
- `Default Events - 默认事件`：常规优先级的事件，不需要立即响应。例如数据加载、页面渲染。
- `Idle Events - 空闲事件`：仅在浏览器空闲时执行的事件。例如后台数据同步。

```js
// src/react/packages/react-reconciler/src/ReactEventPriorities.old.js

// 离散事件优先级，例如：点击事件，input输入等触发的更新任务，优先级最高
export const DiscreteEventPriority: EventPriority = SyncLane;
// 连续事件优先级，例如：滚动事件，拖动事件等，连续触发的事件
export const ContinuousEventPriority: EventPriority = InputContinuousLane;
// 默认事件优先级，例如：setTimeout触发的更新任务
export const DefaultEventPriority: EventPriority = DefaultLane;
// 闲置事件优先级，优先级最低
export const IdleEventPriority: EventPriority = IdleLane;
```

### Schedule 优先级

React 的调度机制使用了一种称为 "优先级 Lane" 的机制来管理任务的优先级。Schedule 调度器会根据不同的优先级来决定任务的执行顺序和时间。

在 React Scheduler 中，有六种主要的优先级类型，每种类型对应一个整数值：

1. `NoPriority - 0`：无优先级，表示不需要立即执行的任务。
2. `ImmediatePriority - 1`：立即优先级，表示必须立即执行的任务，不能被打断。
3. `UserBlockingPriority - 2`：用户阻塞优先级，表示需要快速响应但可以被更高优先级任务打断的任务。
4. `NormalPriority - 3`：正常优先级，表示一般的任务，可以被更高优先级的任务打断。
5. `LowPriority - 4`：低优先级，表示不紧急的任务，可以在空闲时间处理。
6. `IdlePriority - 5`：空闲优先级，仅在浏览器空闲时执行的任务。

这些优先级用于 React 调度器决定哪些任务应该首先执行，哪些任务可以延迟执行。

```js
export const NoPriority = 0; // 无优先级
export const ImmediatePriority = 1; // 立即执行优先级
export const UserBlockingPriority = 2; // 用户阻塞操作优先级 点击，输入
export const NormalPriority = 3; // 正常优先级
export const LowPriority = 4; // 低优先级
export const IdlePriority = 5; // 空闲优先级
```

### 优先级转换关系

在整个 React 应用当中，它们 key 分为四种优先级，它们分别有如下优先级：

1. 事件优先级: 按照用户事件的交互紧急程度,划分的优先级;
2. 更新优先级：事件导致 React 产生的更新对象 update 的优先级;
3. 任务优先级：产生更新对象之后,React 去执行一个更新任务,这个任务所持有的优先级;
4. 调度优先级: Schedule 依据 React 更新任务生成一个调度任务,这个调度任务所持有的优先级;

前三者属于 React 的优先级机制，第四个属于 Scheduler 的优先级机制，Scheduler 内部有自己的优先级机制，虽然与 React 有所区别，但等级的划分基本一致。

::: details 优先级转换

Lane 优先级转换为 React 事件优先级如下代码所示：

```js
// src/react/packages/react-reconciler/src/ReactEventPriorities.old.js

// lanes模型优先级转换为事件优先级
export function lanesToEventPriority(lanes: Lanes): EventPriority {
  const lane = getHighestPriorityLane(lanes);
  if (!isHigherEventPriority(DiscreteEventPriority, lane)) {
    return DiscreteEventPriority;
  }
  if (!isHigherEventPriority(ContinuousEventPriority, lane)) {
    return ContinuousEventPriority;
  }
  if (includesNonIdleWork(lane)) {
    return DefaultEventPriority;
  }
  return IdleEventPriority;
}
```

React 事件优先级转换为 Scheduler 优先级如下代码所示：

```js
// ...
// 并发模式 异步优先级
let schedulerPriorityLevel;
switch (lanesToEventPriority(nextLanes)) {
  case DiscreteEventPriority:
    schedulerPriorityLevel = ImmediateSchedulerPriority;
    break;
  case ContinuousEventPriority:
    schedulerPriorityLevel = UserBlockingSchedulerPriority;
    break;
  case DefaultEventPriority:
    schedulerPriorityLevel = NormalSchedulerPriority;
    break;
  case IdleEventPriority:
    schedulerPriorityLevel = IdleSchedulerPriority;
    break;
  default:
    schedulerPriorityLevel = NormalSchedulerPriority;
    break;
}
// 保存调度单元 Scheduler 所创建的 task 对象
newCallbackNode = scheduleCallback(
  schedulerPriorityLevel,
  performConcurrentWorkOnRoot.bind(null, root),
);
// ...
```

它主要是在 src/react/packages/react-reconciler/src/ReactFiberWorkLoop.old.js 文件中的 ensureRootIsScheduled 函数。

lanesToEventPriority 函数就是上面 Lane 优先级转换为 React 事件优先级的函数，先将 lane 的优先级转换为 React 事件的优先级，然后再根据 React 事件的优先级转换为 Scheduler 的优先级。

:::

[相关内容](https://notes.fe-mm.com/analysis/react/18.2.0/base/Fiber)
