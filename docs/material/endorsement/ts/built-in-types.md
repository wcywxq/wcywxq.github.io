# TS 内置类型

## 总览

| 名称                                            | 描述                                                                  |
| :---------------------------------------------- | :-------------------------------------------------------------------- |
| [Partial](#partial)                             | 将类型 T 的所有属性标记为**可选属性**                                 |
| [Required](#required)                           | 与 Partial 相反，Required 将类型 T 的所有属性标记为**必选属性**       |
| [Readonly](#readonly)                           | 将所有属性标记为 readonly, 即**不能修改**                             |
| [Pick<T, K>](#pick-t-k)                         | 从 T 中过滤出属性 K                                                   |
| [Record<K, T>](#record-k-t)                     | 标记对象的 key value 类型                                             |
| [Exclude<T, U>](#exclude-t-u)                   | 移除 T 中的 U 属性                                                    |
| [Extract<T, U>](#extract-t-u)                   | Exclude 的反操作，取 T，U 两者的交集属性                              |
| [Omit<T, K>](#omit-t-k)                         | 移除 T 中的 U 属性                                                    |
| [NonNullable](#nonnullable)                     | 排除类型 T 的 null \| undefined 属性                                  |
| [Parameters](#parameters)                       | 获取一个函数的所有参数类型                                            |
| [ConstructorParameters](#constructorparameters) | 类似于 Parameters\<T>, ConstructorParameters 获取一个类的构造函数参数 |
| [ReturnType](#returntype)                       | 获取函数类型 T 的返回类型                                             |
| [InstanceType](#instancetype)                   | 获取一个类的返回类型                                                  |

## 目录

### Partial

```ts twoslash
type Partial<T> = {
  [P in keyof T]?: T[P]
}
```

::: info 使用场景

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

::: info 使用场景

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

type CoreInfo = Pick<AccountInfo, 'name' | 'email'>
//   ^?
```

:::

### Record<K, T>

```ts twoslash
type Record<K extends keyof any, T> = {
  [P in K]: T
}
```

::: info 使用场景

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

const accountMap: Record<number, AccountInfo> = {
  10001: {
    name: 'xx',
    age: 0,
    email: 'xxxxx',
    vip: Vip.not
  },
}
const user: Record<'name' | 'email', string> = {
  name: '',
  email: '',
}
```

:::

### Exclude<T, U>

```ts twoslash
type Exclude<T, U> = T extends U ? never: T
```

::: info 使用场景

```ts twoslash
// @errors: 2322
type message = string | number
type ExcludeInfo = Exclude<message, number>

let excludeInfo: ExcludeInfo = 200
```

:::

### Extract<T, U>

```ts twoslash
type Extract<T, U> = T extends U ? T : never
```

::: info 使用场景

```ts twoslash
type Message = string | number | boolean | Date
type ExtractMessage = Extract<Message, boolean | number | Function>
//   ^?
```

:::

### Omit<T, K>

```ts twoslash
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
```

::: info 使用场景

```ts twoslash
interface Student {
  name: string
  age: number
  classes: string
  school: string
}
type PersonAttributes = 'name' | 'age'
type OmitStudent = Omit<Student, PersonAttributes>
//   ^?
```

:::

### NonNullable

```ts twoslash
type NonNullable<T> = T extends null | undefined ? never : T
```

::: info 使用场景

```ts twoslash
// @errors: 2322
type A = string | number | undefined
type B = NonNullable<A> // string | number

function fn<T extends string | undefined>(x: T, y: NonNullable<T>) {
  let s1: string = x
  let s2: string = y
}
```

:::

### Parameters

```ts twoslash
// 此处使用 infer P 将参数定位待推断类型
// T 符合函数特征时，返回参数类型，否则返回 never
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
```

::: info 使用场景

```ts twoslash
interface Person {
  name: string
  age: number
  nationality: string
  id_card: string
}

interface Func {
  (person: Person, count: number): boolean
}

type P = Parameters<Func>
//   ^?
```

```ts twoslash
// 快速获取未知函数的参数类型
function add (a: number, b: number) {
  return a + b
}
// 其他库导入的函数，获取其参数类型
type FuncParams = Parameters<typeof add>
// 内置函数
type FillParams = Parameters<typeof Array.prototype.fill>
//   ^?
```

:::

### ConstructorParameters

```ts twoslash
type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never
```

::: info 使用场景

```ts twoslash
type DateConstrParams = ConstructorParameters<typeof Date>
//   ^?
```

:::

### ReturnType

```ts twoslash
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
```

### InstanceType

```ts twoslash
type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any
```
