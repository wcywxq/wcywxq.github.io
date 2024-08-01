# TS 内置类型

## 总览

| 名称                  | 描述                                                                   |
| :-------------------- | :--------------------------------------------------------------------- |
| Partial               | 将类型 T 的所有属性标记为**可选属性**                                  |
| Required              | 与 Partial 相反，Required 将类型 T 的所有属性标记为**必选属性**        |
| Readonly              | 将所有属性标记为 readonly, 即**不能修改**                              |
| Pick<T, K>            | 从 T 中过滤出属性 K                                                    |
| Record<K, T>          | 标记对象的 key value 类型                                              |
| Exclude<T, U>         | 移除 T 中的 U 属性                                                     |
| Extract<T, U>         | Exclude 的反操作，取 T，U 两者的交集属性                               |
| Omit<T, K>            | 移除 T 中的 U 属性                                                     |
| Exclude<T, U>         | 传入一个类型，和这个类型的几个属性，把传入的属性省略掉，组成一个新类型 |
| NonNullable           | 排除类型 T 的 null \| undefined 属性                                   |
| Parameters            | 获取一个函数的所有参数类型                                             |
| ConstructorParameters | 类似于 Parameters\<T>, ConstructorParameters 获取一个类的构造函数参数  |
| ReturnType            | 获取函数类型 T 的返回类型                                              |
| InstanceType          | 获取一个类的返回类型                                                   |

## 目录

### Partial

```ts twoslash
type Partial<T> = {
  [P in keyof T]?: T[P]
}
```

::: details 使用场景

```ts twoslash
// 账号属性
enum Vip {
  not = 0, // 非 vip
  advanced = 1 // 高级 vip
}

interface AccountInfo {
  name: string
  age: number
  email: string
  vip?: Vip
}

// render table
const accountTableList: AccountInfo[] = []

// filter accountInfo form
const model: Partial<AccountInfo> = {
  name: '高级 vip 用户',
  vip: Vip.advanced
}
```

:::

### Required

```ts twoslash
type Required<T> = {
  [P in keyof T]-?: T[P]
}
```

### Readonly

```ts twoslash
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
```

### Pick<T, K>

```ts twoslash
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

::: details 使用场景

:::

### Record<K, T>

```ts twoslash
type Record<K extends keyof any, T> = {
  [P in K]: T
}
```

### Exclude<T, U>

```ts twoslash
type Exclude<T, U> = T extends U ? never: T
```

::: details 使用场景

```ts twoslash
type message = string | number
type ExcludeInfo = Exclude<message, number>

// @errors: 2322
let excludeInfo: ExcludeInfo = 200
```

:::

### Extract<T, U>

### Omit<T, K>

### NonNullable

### Parameters

### ConstructorParameters

### ReturnType

### InstanceType
