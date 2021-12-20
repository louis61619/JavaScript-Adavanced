var obj = {
  name: 'Louis',
  age: 25
}

// 原型式繼承

// 第一種
function createObject(o) {
  var newObj = {}
  Object.setPrototypeOf(newObj, o)
  return newObj
}
var info = createObject(obj)

// 第二種
function createObject2(o) {
  function Fn() {}
  Fn.prototype = o
  var newObj = new Fn()

  // 不要直接操作 __proto__
  // var obj = {}
  // obj.__proto__ = o

  return newObj
}
var info2 = createObject2(obj)

// 第三種
var info3 = Object.create(obj)

console.log(info.__proto__)
console.log(info2.__proto__)
console.log(info3.__proto__)