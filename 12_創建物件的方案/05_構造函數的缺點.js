// function foo() {
//   function bar() {

//   }
//   return bar
// }

// var fn1 = foo()
// var fn2 = foo()

// 每次執行都會創建新的物件
// console.log(fn1 === fn2)

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

var p1 = new Person('張三', 18, 1.88, '台北')

var p2 = new Person('李四', 18, 1.88, '新竹')

// 每次創建新的物件時，每個屬性的函數都會是新的，其實沒有必要，函數可以是同一個
console.log(p1.running === p2.running)