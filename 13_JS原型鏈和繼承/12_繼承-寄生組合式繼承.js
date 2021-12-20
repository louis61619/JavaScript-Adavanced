
// 封裝一個繼承函數
function inheritPrototype(SubType, SuperType) {
  // 只取一個空物件上的原型為 Person.prototype
  SubType.prototype = Object.create(SuperType.prototype)
  // 對 constructor 進行處理
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  })
}




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

// 只取一個空物件上的原型為 Person.prototype
// Student.prototype = Object.create(Person.prototype)
// // 對 constructor 進行處理
// Object.defineProperty(Student.prototype, "constructor", {
//   enumerable: false,
//   configurable: true,
//   writable: true,
//   value: Student
// })
inheritPrototype(Student, Person)

Student.prototype.studying = function() {
  console.log(this.name + ' studying')
}

var stu1 = new Student('Louis', 26, ['Renny'], 111)
var stu2 = new Student('Renny', 26, ['Louis'], 112)


// stu1.friends.push('kobe')
// console.log(stu1)

console.log(stu2.__proto__)

// 缺點：
// Person 函數被調用了兩次
// 原型物件上多出了一些為 undefined 的不必要屬性