function Student(name, age) {
  this.name = name
  this.age = age
}

function Teacher() {

}

// const stu = new Student("Louis", 26)


// 執行 Student 函數中的內容，但是創建出來 Teacher 物件
const teacher = Reflect.construct(Student, ["Louis", 26], Teacher)
console.log(teacher)
console.log(teacher.__proto__ === Teacher.prototype)