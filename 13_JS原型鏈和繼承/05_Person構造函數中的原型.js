function Person() {

}

const p = new Person()
// console.log(Person.prototype)
// console.log(Object.getOwnPropertyDescriptors(p.__proto__))

// console.log(Object.getOwnPropertyDescriptors(Person.prototype.__proto__))
console.log(p.__proto__.__proto__)


var obj = {}

// console.log(Object.getOwnPropertyDescriptors(obj.__proto__))

console.log(p.__proto__.__proto__ === Object.prototype)