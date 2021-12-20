'use strict'

// 禁止意外創建全局變數
// function foo() {
//   age = 300
// }

// foo()


// 禁止函數有相同的參數名稱
// function foo(x, y, x) {
//   console.log(x, y, x)
// }
// foo(10, 20, 30)

// 靜默錯誤
// true.name = "abc"
// NanN = 123
var obj = {}
Object.defineProperty(obj, "name", {
  // 可配置
  configurable: false,
  // 可寫？
  writable: false,
  value: "why"
})

// console.log(obj)
// obj.name = 'jiji'
delete obj.name

// 不允許使用八進制 0123
var num1 = 0o123
var num2 = 0x123
var num3 = 0b100

// eval函數不會向上引用變數
var str = 'var message = "Hello World"; console.log(message);'

eval(str)

console.log(message)