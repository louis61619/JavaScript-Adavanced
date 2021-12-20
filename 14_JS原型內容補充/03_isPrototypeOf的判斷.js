function Person() {

}

var p = new Person()

console.log(p instanceof Person)
console.log(Person.prototype.isPrototypeOf(p))


var obj = {
  name: 'Louis',
  age: 26
}

var info = Object.create(obj)

// 判斷 obj 是否出現在 info 的原型鏈上面
console.log(obj.isPrototypeOf(info))