// 類
class Person {

}


// // 類的表達式
// var Animal = class {

// }

// 類的特點
console.log(Person.prototype.__proto__)
console.log(Person.__proto__)

// class Person
console.log(Person.prototype.constructor)

// function
console.log(typeof Person)

var p = new Person()
console.log(p.__proto__ === Person.prototype)

console.log(Person === p.__proto__.constructor)