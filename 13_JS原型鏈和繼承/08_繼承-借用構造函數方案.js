function Person(name, age, friends) {
  this.name = name
  this.age = age
  this.friends = friends
}

Person.prototype.eating = function() {
  console.log(this.name + ' eating')
}

function Student(name, age, friends, sno) {

  Person.call(this, name, age, friends)

  this.sno = sno
}

// 實現基於原型鏈的繼承
var p = new Person()
Student.prototype = p

Student.prototype.studying = function() {
  console.log(this.name + ' studying')
}

var stu1 = new Student('Louis', 26, ['Renny'], 111)
var stu2 = new Student('Renny', 26, ['Louis'], 112)


stu1.friends.push('kobe')

console.log(stu2.friends)

// 缺點：
// Person 函數被調用了兩次
// 原型物件上多出了一些為 undefined 的不必要屬性