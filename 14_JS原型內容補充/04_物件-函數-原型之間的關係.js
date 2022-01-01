var obj = {
  name: 'Louis'
}

// 物件裡面有一個 __proto__： 隱式原型物件
console.log(obj.__proto__)


// Foo 是一個函數，那麼他會有一個顯示原型物件 prototype
// Foo.prototype 來自哪裡：
// 答案： 創建一個函數， Foo.prototype = { constructor: Foo }

// Foo 是一個物件，那麼他會有一個隱式原型物件 __proto__
// Foo.__proto__ 來自哪裡？
// 答案： new Function() Foo.__proto__ = Function.prototype
// Function.prototype = { constructor: Function }


// var Foo = new Function()
function Foo() {

}

console.log(Foo.prototype === Foo.__proto__)
console.log(Foo.prototype.constructor.prototype.constructor)
console.log(Foo.__proto__.constructor)