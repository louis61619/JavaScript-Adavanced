var obj1 = {} // 創建一個物件
// var obj2 = new Object() // 創建一個物件

// function Person() {

// }

// // 在內存中創造一個物件
// // 將this賦值為該物件
// // 將Person的prototype賦值給該物件的__proto__
// // 返回this

// var p = new Person()

// console.log(obj1.__proto__)

console.log(obj1.__proto__ === Object.prototype)

// console.log(Object.prototype.constructor.prototype)

// 查看Object原型中的方法
console.log(Object.getOwnPropertyDescriptors(Object.prototype))

// console.log(Object.getOwnPropertyDescriptors(Object))

// console.log(Object)
