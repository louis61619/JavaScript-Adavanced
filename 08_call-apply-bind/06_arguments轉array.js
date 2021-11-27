
// 1. 自己進行遍歷
// function foo(num1, num2) {
//   var newArr = []
//   for(var i=0; i < arguments.length; i++) {
//     newArr.push(arguments[i])
//   }
//   console.log(newArr)
// }

// 2. 使用slice
// slice的原理
Array.prototype.myslice = function(start, end) {
  // 首先從this獲取到當前的陣列
  var arr = this
  var newArray = []

  // 判斷start, end有沒有值
  start = start || 0
  end = end || arr.length

  // 然後透過傳入的參數決定遍歷的起始位置和結束位置
  for(var i = start; i < end; i++) {
    arr[i] !== undefined && newArray.push(arr[i])
    // newArray.push(arr[i])
  }
  // 最後再進行返回
  return newArray
}
// 自定義的slice
var newArr = Array.prototype.myslice.call(['aaa', 'bbb', 'ccc'], 1, 2)
// console.log(newArr)
// 原生的slice
var newArr1 = Array.prototype.slice.call(['aaa', 'bbb', 'ccc'], 1, 2)
// console.log(newArr1)

// 所以可透過call來決定進行遍歷的this
// function foo(num1, num2) {
//   var newArr = Array.prototype.slice.call(arguments)
//   console.log(newArr)
// }

// 同理
function foo(num1, num2) {
  var newArr = [].slice.call(arguments)
  console.log(newArr)
}


// 3. es6的語法
// 3.1 for..of
// function foo(num1, num2) {
//   var newArr = []
//   for(let item of arguments) {
//     newArr.push(item)
//   }
//   console.log(newArr)
// }
// 3.2
// function foo(num1, num2) {
//   var newArr = Array.from(arguments)
//   console.log(newArr)
// }
// 3.3
// function foo() {
//   var newArr = [...arguments]
//   console.log(newArr)
// }




foo(10, 20, 30, 40, 50)