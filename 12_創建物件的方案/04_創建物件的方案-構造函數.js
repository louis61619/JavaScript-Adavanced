// 構造函數的首字母一般是大寫

function Person(name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address
  this.eating = function() {
    console.log(this.name + '在吃東西')
  },
  this.running = function() {
    console.log(this.name + '在跑步')
  }
}

// 不能返回物件 不然會覆蓋this
// function Person1(name, age, height, address) {
//   // return {}
//   return {
//     name,
//     age,
//     height,
//     address
//   }
// // }
// const p1 = new Person1()
// console.log(p1)

const p = new Person('張三', 18, 1.88, '台北')

