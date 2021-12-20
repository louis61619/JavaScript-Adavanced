function Person() {
  this.name = 'Louis'
  this.friends = []
}

Person.prototype.eating = function() {
  console.log(this.name + ' eating')
}

function Student() {
  this.sno = '111'
}

// 實現基於原型鏈的繼承
var p = new Person()
Student.prototype = p

Student.prototype.studying = function() {
  console.log(this.name + ' studying')
}

var stu1 = new Student()
var stu2 = new Student

stu1.eating()

// 原型鏈實現的弊端
// 1. 打印 stu 物件的時候，繼承的屬性是沒辦法看到的
console.log(stu1.name)

// 由於陣列是獲取引用，所以只要修改所有基於 p 的子類都會受到影響
stu1.friends.push('kobe')

console.log(stu2.friends)