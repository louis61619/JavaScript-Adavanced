// 案例：創建一個教室類，創建出來的物件都是可迭代物件
class Classroom {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }

  entry(newStudnet) {
    this.students.push(newStudnet)
  }

  // foo = function name() {
    
  // };

  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.students.length) {
          return { done: false, value: this.students[index++] }
        } else {
          return { done: true, value: undefined }
        }
      },
      return: () => {
        console.log('迭代器提前終止～')
      }
    }
  }
}

const classroom = new Classroom("102", "電腦教室", ["Renny", "Louis", "Peter"])

for(const stu of classroom) {
  console.log(stu)
  if(stu === 'Louis') {
    break
  }
}