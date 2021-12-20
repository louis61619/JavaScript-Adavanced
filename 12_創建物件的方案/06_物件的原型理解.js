var obj = { name: 'why' } // [[prototype]]

var info = {}

// 早期的 ecma 沒有規範如何查看 [[prototype]]
// 瀏覽器提供了一個屬性讓我們查看物件的原型
// console.log(obj.__proto__)


// ES5 提供
// console.log(Object.getPrototypeOf(obj))


// 原型的作用
// 當我們從一個物件中獲取某一個屬性時，會觸發 [[get]] 操作
// 如果沒有找到時沿著原型進行查找

obj.__proto__.age = 19

console.log(obj.age)