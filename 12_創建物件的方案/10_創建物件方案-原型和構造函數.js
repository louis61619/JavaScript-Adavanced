
// 錯誤示範： 這樣會導致後面創建的物件 將 prototype 不斷覆蓋
// function Person(name, age, height, address) {
//   Person.prototype.name = name
//   Person.prototype.name = age
//   Person.prototype.name = height
//   Person.prototype.name = address
// }


function Person(name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address
}

Person.prototype.eating = function() {
  console.log(this.name + '在吃東西')
}

Person.prototype.running = function() {
  console.log(this.name + '在跑步')
}


var p1 = new Person("Louis", 25, 1.75, "新北市")
var p2 = new Person("Jenny", 20, 1.7, "台北市")

console.log(p1.name)