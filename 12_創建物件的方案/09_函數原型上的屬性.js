function foo() {

}


// console.log(Object.getOwnPropertyDescriptors(foo.prototype))

// 輸出
// {
//   constructor: {
//     value: [Function: foo],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }

// 透過 defineProperty 更改為可列舉
// Object.defineProperty(foo.prototype, "constructor", {
//   enumerable: true,
// })

// console.log(foo.prototype.constructor)
// // 動態獲取函數名
// console.log(foo.prototype.constructor.name)

// 是可以這樣打印的
// console.log(foo.prototype.constructor.prototype.constructor)


// 函數有隱式原型
// console.log(foo.__proto__)

// 函數也有顯示原型
// console.log(foo.prototype)

// var f1 = new foo()
// var f2 = new foo()

// 相等
// console.log(f1.__proto__ === foo.prototype)
// console.log(f2.__proto__ === foo.prototype.constructor)


// 可以在prototype上添加屬性
// foo.prototype.age = 18
// foo.prototype.height = 1.88
// foo.prototype.eating = function() {

// }

// var f1 = new foo()
// console.log(f1.age)

// 可以直接修改整個 prototype 物件
foo.prototype = {
  constructor: foo,
  name: "Louis",
  age: 18,
  height: 1.75
}

// 可以通過 Object.defineProperty 方式添加 constructor
// Object.defineProperty(foo.prototype, "constructor", {
//   enumerable: false,
//   configurable: true,
//   writable: true,
//   value: foo
// })

var f1 = new foo()

console.log(f1.name)
console.log(foo.prototype.constructor.prototype)