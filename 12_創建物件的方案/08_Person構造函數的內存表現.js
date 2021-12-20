function foo() {

}

// 函數有隱式原型
console.log(foo.__proto__)

// 函數也有顯示原型
console.log(foo.prototype)

var f1 = new foo()
var f2 = new foo()

// 相等
console.log(f1.__proto__ === foo.prototype)
console.log(f2.__proto__ === foo.prototype)


f1.__proto__.name = 'Louis'
console.log(f1.name)
console.log(f2.name)


foo.prototype.age = '19'
console.log(f1.age)
console.log(f2.age)