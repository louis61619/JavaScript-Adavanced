class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log('吃早餐')
  }

  static staticMethod() {
    console.log('aaaa')
  }
}

// Student 稱之為子類
class Student extends Person {
  // JS引擎在解析子類的時候就有要求，如果要實現繼承，那麼子類必須調用super，即調用父類的構造方法
  constructor(name, age, sno) {
    super(name, age)
    this.sno = sno
  }

  eating() {
    // 複用父類中的處理邏輯
    super.eating()
    console.log('吃午餐')
  }

  static staticMethod() {
    super.staticMethod()
    console.log('bbbb')
  }
}

var stu = new Student("why", 18, 100)

// console.log(stu.__proto__.constructor)
// console.log(stu.__proto__.__proto__.constructor)
stu.eating()

Student.staticMethod()