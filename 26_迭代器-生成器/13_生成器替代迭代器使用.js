// 1. 使用生成器替代迭代器函數
function* createArrayIterator(arr) {
  // 第一種寫法
  // for(const item of arr) {
  //   yield item
  // }

  // 第二種寫法
  yield* arr


  // 第三種寫法
  // let index = 0
  // return {
  //   next() {
  //     if(index < arr.length) {
  //       return { done: false, value: arr[index++] }
  //     } else {
  //       return { done: true, value: undefined }
  //     }
  //   }
  // }

}

const names = ['abc', 'dcd', 'jdjd']

const namesIterator = createArrayIterator(names)

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())


// 創建一個函數，這個函數可以迭代範圍內的數字
function* createRangeIterator(start, end) {

  let index = start
  while (index <= end) {
    yield index++
  }

  // let index = start
  // return {
  //   next: () => {
  //     if(index <= end) {
  //       return { done: false, value: index++ }
  //     } else {
  //       return { done: true, value: undefined }
  //     }
  //   }
  // }
}

const rangeIterator = createRangeIterator(1, 3)
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())


class Classroom {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }

  entry(newStudnet) {
    this.students.push(newStudnet)
  }

  // [Symbol.iterator] = function* (){
  //   yield* this.students
  // }

  *[Symbol.iterator]() {
    yield* this.students
  }
}

const classroom = new Classroom("102", "電腦教室", ["Renny", "Louis", "Peter"])

for(const stu of classroom) {
  console.log(stu)
  if(stu === 'Louis') {
    break
  }
}