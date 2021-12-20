
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

inheritPrototype(Student, Person)

Student.prototype.studying = function() {
  console.log(this.name + ' studying')
}

var stu = new Student('Louis', 26, ['Renny'], 111)

// 順著原型鏈一層層往上找 看看有沒有該構造函數
// true
console.log(stu instanceof Student)
console.log(stu instanceof Person)
console.log(stu instanceof Object)