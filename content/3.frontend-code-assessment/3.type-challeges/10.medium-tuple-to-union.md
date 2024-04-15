---
title: No.10 元组转合集(联合类型)
---

实现泛型`TupleToUnion<T>`，它返回元组所有值的合集。

例如

```ts
type Arr = ["1", "2", "3"];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
```

## method 1

```ts
type TupleToUnion<T extends any[]> = T[number];
```

## method 2

```ts
type TupleToUnion<T extends unknown[]> = T extends [infer P, ...infer R]
  ? P | TupleToUnion<R>
  : never;
```

## method 3

```ts
type TupleToUnion<T> = T extends (infer P)[] ? P : never;
```
