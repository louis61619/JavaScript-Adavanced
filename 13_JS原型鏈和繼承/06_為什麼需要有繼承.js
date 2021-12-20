// student 和 teacher 兩個類都有重複的屬性和方法 繼承可以將兩個類中共同的地方抽取到父類中


// Student
function Student(name, age, sno) {
  this.name = name
  this.age = age
  this.sno = sno
}


Student.prototype.running = function() {
  console.log(this.name + ' eating')
}
Student.prototype.studying = function() {
  console.log(this.name + ' studying')
}

// Teacher
function Teacher(name, age, title) {
  this.name = name
  this.age = age
  this.title = title
}

Teacher.prototype.running = function() {
  console.log(this.name + ' eating')
}
Teacher.prototype.teaching = function() {
  console.log(this.name + ' teaching')
}
