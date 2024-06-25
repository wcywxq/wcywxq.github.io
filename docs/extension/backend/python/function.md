# 函数

## 工具函数


### 绝对值函数



```python
print("绝对值函数:", abs(100), abs(-120), abs(12.34))
```

    绝对值函数: 100 120 12.34


### 返回最大值



```python
print("返回最大值:", max(1, 2), max(2, 3, 1, -5))
```

    返回最大值: 2 3


### 返回最小值



```python
print("返回最小值:", min(1, 2), min(2, 3, 1, -5))
```

    返回最小值: 1 -5


### 进制转换



```python
print(hex(255), hex(1000))
```

    0xff 0x3e8


## 数据类型转换



```python
print("整型 int: ", int("123"), int(12.34), type(int("123")), type(int(12.34)))
print("浮点型 float: ", float("12.34"), type(float("12.34")))
print("字符型 str: ", str(1.23), type(str(1.23)), str(100), type(str(100)))
print("布尔型 bool: ", bool(1), type(bool(1)), bool(""), type(bool("")))
```

    整型 int:  123 12 <class 'int'> <class 'int'>
    浮点型 float:  12.34 <class 'float'>
    字符型 str:  1.23 <class 'str'> 100 <class 'str'>
    布尔型 bool:  True <class 'bool'> False <class 'bool'>


## 函数定义


### 对参数类型检查



```python
def my_abs(x):
    if not isinstance(x, (int, float)):
        raise TypeError("Bad operand type")
    if x >= 0:
        return x
    else:
        return -x
```

### 空函数 pass 占位



```python
def nop():
    pass
```

## 函数返回多个值



```python
import math


def move(x, y, step, angle=0):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx, ny


r = move(100, 100, 60, math.pi / 6)
x, y = move(100, 100, 60, math.pi / 6)
print("返回值:", r, x, y)
```

    返回值: (151.96152422706632, 70.0) 151.96152422706632 70.0


## 默认参数


- 默认参数必须指向不变对象



```python
def power(x, n=2):
    s = 1
    while n > 0:
        n -= 1
        s *= x
    return s


print(power(5), power(5, 3))
```

    25 125


- 多个默认参数



```python
def enroll(name, gender, age=6, city="beijing"):
    return f"name: {name}, gender: {gender}, age: {age}, city: {city}"


print(enroll("Search", "F"))
print(enroll("Bob", "M"))
# 不按照默认顺序传参
print(enroll("Adam", "M", city="shanghai"))
```

    name: Search, gender: F, age: 6, city: beijing
    name: Bob, gender: M, age: 6, city: beijing
    name: Adam, gender: M, age: 6, city: shanghai


- 默认参数为可变对象



```python
def add_end(L=None):
    if L is None:
        L = []
    L.append("END")
    return L


print(add_end())
```

    ['END']


## 可变参数 \*


允许传入 0 个或任意个参数，在函数调用时自动组装为一个 `tuple`


- 传递 list 或 tuple



```python
def calc(numbers):
    sum = 0
    for n in numbers:
        sum += n**2
    return sum


print(calc([1, 2, 3]), calc((1, 3, 5, 7)))
```

    14 84


- 可变参数的传递形式



```python
def calc_dynamic(*numbers):
    sum = 0
    for n in numbers:
        sum += n**2
    return sum


print(calc_dynamic(1, 2, 3))
print(calc_dynamic(1, 3, 5, 7))

nums1 = [1, 2, 3]
nums2 = [1, 3, 5, 7]

print(calc_dynamic(nums1[0], nums1[1], nums1[2]))
print(calc_dynamic(*nums2))
```

    14
    84
    14
    84


## 关键字参数 \*\*


关键字参数允许传入 0 个或任意个含参数名的参数，在函数内部自动组装为一个 dict 字典

关键字参数可以扩展函数的功能，可以用作可选项



```python
def person(name, age, **kw):
    print(f"name: {name}, age: {age}, other: {kw}")


person("Michael", 20)
person("Bob", 35, city="beijing")
person("Adam", 45, gender="M", job="Engineer")

dict1 = {"city": "beijing", "job": "Engineer"}

person("Jack", 24, city=dict1["city"], job=dict1["job"])
person("Jack", 24, **dict1)
```

    name: Michael, age: 20, other: {}
    name: Bob, age: 35, other: {'city': 'beijing'}
    name: Adam, age: 45, other: {'gender': 'M', 'job': 'Engineer'}
    name: Jack, age: 24, other: {'city': 'beijing', 'job': 'Engineer'}
    name: Jack, age: 24, other: {'city': 'beijing', 'job': 'Engineer'}


## 命名关键字参数


分隔符号 `*` 后的参数被认为是命名关键字参数


- 检查关键字参数重是否包含 city 和 job 参数



```python
def person_name(name, age, **kw):
    if "city" in kw:
        pass
    if "job" in kw:
        pass
    print(f"name: {name}, age: {age}, other: {kw}")


# 这种方法仍旧可以绕过参数
person_name("Jack", 24, city="Beijing", addr="chaoyang", zipcode=123456)
```

    name: Jack, age: 24, other: {'city': 'Beijing', 'addr': 'chaoyang', 'zipcode': 123456}


- 限制关键字参数名字



```python
def person_limit(name, age, *, city, job):
    print(name, age, city, job)


person_limit("Jack", 25, city="Beijing", job="Engineer")
```

    Jack 25 Beijing Engineer


- 函数定义中存在了可变参数，后面的命名关键字参数就不需要分割符 `*`



```python
def person_has_dynamic(name, age, *args, city, job):
    print(name, age, args, city, job)


# 未传入参数名，调用将报错
# person_has_dynamic('Jack', 24, 'Beijing', 'Engineer')
```

- 命名关键字参数可以有缺省值，从而简化调用



```python
def person_default_value(name, age, *, city="Beijing", job):
    print(name, age, city, job)


person_default_value("Jack", 20, job="Player")
```

    Jack 20 Beijing Player


## 参数祖合


定义顺序优先级：必选参数 > 默认参数 > 可变参数 > 命名关键字参数 > 关键字参数



```python
def f1(a, b, c=0, *args, **kwargs):
    print(f"a={a}, b={b}, c={c}, args={args}, kwargs={kwargs}")


def f2(a, b, c=0, *, d, **kwargs):
    print(f"a={a}, b={b}, c={c}, d={d}, kwargs={kwargs}")


f1(1, 2)
f1(1, 2, c=3)
f1(1, 2, 3, "a", "b")
f1(1, 2, 3, "a", "b", x=9)
f2(1, 2, d=99, ext=None)

args = (1, 2, 3, 4)
kwargs = {"d": 99, "x": "#"}
f1(*args, **kwargs)

args = (3, 5, 7)
kwargs = {"d": True, "e": [], "x": "#"}
f2(*args, **kwargs)
```

    a=1, b=2, c=0, args=(), kwargs={}
    a=1, b=2, c=3, args=(), kwargs={}
    a=1, b=2, c=3, args=('a', 'b'), kwargs={}
    a=1, b=2, c=3, args=('a', 'b'), kwargs={'x': 9}
    a=1, b=2, c=0, d=99, kwargs={'ext': None}
    a=1, b=2, c=3, args=(4,), kwargs={'d': 99, 'x': '#'}
    a=3, b=5, c=7, d=True, kwargs={'e': [], 'x': '#'}


## 递归函数


### 斐波那契



```python
def fact(n):
    if n == 1:
        return 1
    return n * fact(n - 1)


print(fact(1))
print(fact(100))
# 栈溢出
# print(fact(1000))
```

    1
    93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000


### 尾递归优化


return 语句不包含表达式

递归本身无论调用多少次，都只会用到一个栈帧，不会出现栈溢出的情况



```python
def fact_call(n):
    return fact_inter(n, 1)


def fact_inter(num, product):
    if num == 1:
        return product
    return fact_inter(num - 1, num * product)


print(fact_inter(5, 1))
print(fact_inter(4, 5))
print(fact_inter(3, 20))
print(fact_inter(2, 60))
print(fact_inter(1, 120))
```

    120
    120
    120
    120
    120


### 汉诺塔


请编写 move(n, a, b, c) 函数，它接收参数 n，表示 3 个柱子 A、B、C 中第 1 个柱子 A 的盘子数量，然后打印出把所有盘子从 A 借助 B 移动到 C 的方法



```python
def move(n, a, b, c):
    if n == 1:
        print(a, "->", c)
    else:
        move(n - 1, a, c, b)
        print(a, "->", "c")
        move(n - 1, b, a, c)


move(3, "A", "B", "C")
```

    A -> C
    A -> c
    C -> B
    A -> c
    B -> A
    B -> c
    A -> C

