// 在JS中類只能有一個父類
// 所以可以利用函數封裝一個混入的效果

class Student {

}

function mininRunner(BaseClass) {
  class NewClass extends BaseClass {
    running() {
      console.log('running')
    }
  }
  return NewClass
}

function mixinEater(BaseClass) {
  return class extends BaseClass {
    eating() {
      console.log('eating')
    }
  }
}

// var NewStudent = mininRunner(Student)
// var stu = new NewStudent()

var stu = new (mixinEater(mininRunner(Student)))()

stu.running()
stu.eating()

