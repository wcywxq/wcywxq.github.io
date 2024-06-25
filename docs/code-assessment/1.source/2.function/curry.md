---
title: 函数柯理化
---

## 概念

函数柯里化（Currying）是一种编程技术，又称部分求值（Partial Evaluation）。它将一个多参数函数转换成一系列接受单个参数的函数，每次调用返回一个新的函数，直到接收完所有必需的参数后才执行原始函数并返回最终结果。这样做的好处包括：可以更灵活地处理参数、创建特定用途的函数工厂以及更容易实现函数组合。

> 函数柯理化的基础是**闭包**

## 实现

```js
function curry(fn) {
  return function judge(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...subArgs) {
        return judge.apply(this, args.concat(subArgs))
      }
    }
  }
}

// 一行代码实现
const currying = fn => (judge = (...args) => (args.length >= fn.length ? fn(...args) : (...subArgs) => judge(...args.concat(subArgs))))

// 测试
function sum(a, b, c) {
  return a + b + c
}

let currySum = curry(sum)

console.log(currySum(1, 2, 3)) // 6，仍然可以被正常调用
console.log(currySum(1)(2, 3)) // 6，对第一个参数的柯里化
console.log(currySum(1)(2)(3)) // 6，全柯里化
```

## 应用案例

### 在提交用户信息的时候校验手机号、邮箱

- 校验函数封装

```js
// 非柯里化版本
function checkByRegExp(regExp,string) {
  return regExp.test(string)
}

checkByRegExp(/^1\d{10}$/, '15010001000') // 校验电话号码
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, 'test@163.com') // 校验邮箱
```

在实际使用中，不需要去关注正则是如何匹配的，只需要使用更具体函数去分别校验手机号或者邮箱，这里就需要使用柯里化函数处理：

```js
// 进行柯里化
let _check = curry(checkByRegExp)
// 生成工具函数，验证电话号码
let checkCellPhone = _check(/^1\d{10}$/)
// 生成工具函数，验证邮箱
let checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/)

checkCellPhone('18642838455') // 校验电话号码
checkCellPhone('13109840560') // 校验电话号码
checkCellPhone('13204061212') // 校验电话号码

checkEmail('test@163.com') // 校验邮箱
checkEmail('test@qq.com') // 校验邮箱
checkEmail('test@gmail.com') // 校验邮箱
```
