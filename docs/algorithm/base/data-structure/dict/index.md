# 字典 Dict

在[前一篇文章](https://www.cnblogs.com/jaxu/p/11287315.html)中，我们介绍了如何在 JavaScript 中实现集合。字典和集合的主要区别就在于，集合中数据是以 **[值，值]** 的形式保存的，我们只关心值本身；而在字典和散列表中数据是以 **[键，值]** 的形式保存的，键不能重复，我们不仅关心键，也关心键所对应的值。

我们也可以把字典称之为映射表。由于字典和集合很相似，我们可以在[前一篇文章](https://www.cnblogs.com/jaxu/p/11287315.html)中的集合类 Set 的基础上来实现我们的字典类 Dictionary。与 Set 类相似，ES6 的原生 Map 类已经实现了字典的全部功能，稍后我们会介绍它的用法。

下面是我们的 Dictionary 字典类的实现代码：

```js
class Dictionary {
    constructor() {
        this.items = {}
    }

    set(key, value) {
        // 向字典中添加或修改元素
        this.items[key] = value
    }

    get(key) {
        // 通过键值查找字典中的值
        return this.items[key]
    }

    delete(key) {
        // 通过使用键值来从字典中删除对应的元素
        if (this.has(key)) {
            delete this.items[key]
            return true
        }
        return false
    }

    has(key) {
        // 判断给定的键值是否存在于字典中
        return this.items.hasOwnProperty(key)
    }

    clear() {
        // 清空字典内容
        this.items = {}
    }

    size() {
        // 返回字典中所有元素的数量
        return Object.keys(this.items).length
    }

    keys() {
        // 返回字典中所有的键值
        return Object.keys(this.items)
    }

    values() {
        // 返回字典中所有的值
        return Object.values(this.items)
    }

    getItems() {
        // 返回字典中的所有元素
        return this.items
    }
}
```

与 Set 类很相似，只是把其中 value 的部分替换成了 key。我们来看看一些测试用例：

```js
let Dictionary = require("./dictionary")

let dictionary = new Dictionary()
dictionary.set("Gandalf", "gandalf@email.com")
dictionary.set("John", "john@email.com")
dictionary.set("Tyrion", "tyrion@email.com")
console.log(dictionary.has("Gandalf")) // true
console.log(dictionary.size()) // 3
console.log(dictionary.keys()) // [ 'Gandalf', 'John', 'Tyrion' ]
console.log(dictionary.values()) // [ 'gandalf@email.com', 'john@email.com', 'tyrion@email.com' ]
console.log(dictionary.get("Tyrion")) // tyrion@email.com

dictionary.delete("John")
console.log(dictionary.keys()) // [ 'Gandalf', 'Tyrion' ]
console.log(dictionary.values()) // [ 'gandalf@email.com', 'tyrion@email.com' ]
console.log(dictionary.getItems()) // { Gandalf: 'gandalf@email.com', Tyrion: 'tyrion@email.com' }
```

相应地，下面是使用 ES6 的原生 Map 类的测试结果：

```js
let dictionary = new Map()
dictionary.set("Gandalf", "gandalf@email.com")
dictionary.set("John", "john@email.com")
dictionary.set("Tyrion", "tyrion@email.com")
console.log(dictionary.has("Gandalf")) // true
console.log(dictionary.size) // 3
console.log(dictionary.keys()) // [Map Iterator] { 'Gandalf', 'John', 'Tyrion' }
console.log(dictionary.values()) // [Map Iterator] { 'gandalf@email.com', 'john@email.com', 'tyrion@email.com' }
console.log(dictionary.get("Tyrion")) // tyrion@email.com

dictionary.delete("John")
console.log(dictionary.keys()) // [Map Iterator] { 'Gandalf', 'Tyrion' }
console.log(dictionary.values()) // [Map Iterator] { 'gandalf@email.com', 'tyrion@email.com' }
console.log(dictionary.entries()) // [Map Iterator] { [ Gandalf: 'gandalf@email.com' ], [ Tyrion: 'tyrion@email.com' ] }
```

和前面我们自定义的 Dictionary 类稍微有一点不同，values()方法和 keys()方法返回的不是一个数组，而是 Iterator 迭代器。另一个就是这里的 size 是一个属性而不是方法，然后就是 Map 类没有 getItems()方法，取而代之的是 entries()方法，它返回的也是一个 Iterator。有关 Map 类的详细详细介绍可以查看[这里](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)。

在 ES6 中，除了原生的 Set 和 Map 类外，还有它们的弱化版本，分别是[WeakSet](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)和[WeakMap](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)，我们在[《栈》](../stack)一文中已经见过 WeakMap 的使用了。

Map 和 Set 与它们各自的弱化版本之间的主要区别是：

- WeakSet 或 WeakMap 类没有 entries、keys 和 values 等迭代器方法，只能通过 get 和 set 方法访问和设置其中的值。这也是为什么我们在[《栈》](../stack)一文中要使用 WeakMap 类来定义类的私有属性的原因。
- 只能用对应作为键值，或者说其中的内容只能是对象，而不能是数字、字符串、布尔值等基本数据类型。

弱化的 Map 和 Set 类主要是为了提供 JavaScript 代码的性能。
