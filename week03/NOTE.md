# 每周总结可以写在这里

## 作业

1. JavaScript | 表达式，类型准换

根据这节课上讲师已写好的部分，补充写完函数 [convertStringToNumber](./convertStringToNumber.js) 以及函数 [convertNumberToString](./convertNumberToString.js)

2. JavaScript | 语句，对象

根据课上老师的示范，找出 JavaScript 标准里所有的对象，分析有哪些对象是我们无法实现出来的，这些对象都有哪些特性？写一篇文章，放在学习总结里。

## 总结

**对象分类**

+ 宿主对象  (Node、Browser环境提供)
+ 内置对象  (JS语言提供)
  - 固有对象  (ECMA标准规定，JS runtime自动创建)
  - 原生对象  (用户通过Array、RegExp等内置构造器或者特殊语法创建的对象)
  - 普通对象  (由{}语法、Object构造器或者class关键字定义创建的对象，它能够被原型继承)

**所有对象**

+ 内置对象：

+ **固有对象(150+)**
  - [Intrinsic Objects](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-well-known-intrinsic-objects)
+ **原生对象** （无法用纯JS实现，无法用 class/extend 语法继承）
  1. 基本类型 Boolean String Number Symbol Object
  2. 基础功能和数据结构 Array Date RegExp Promise Proxy Map WeakMap Set WeakSet Function
  3. 错误类型 Error EvalError RangeError ReferenceError SyntaxError TypeError URIError
  4. 二进制操作 ArrayBuffer ShareArrayBuffer DataView
  5. 带类型数组 Float32Array Float64Array Int8Array Int16Array Int32Array UInt8Array UInt16Array UInt32Array UInt8ClampedArray

