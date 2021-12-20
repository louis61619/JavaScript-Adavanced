// function sum(m, n) {
//   return m + n
// }

// console.log(5, 10)


// 假如在函數中經常需要把5和另外一個數字相加
function makeAdder(count) {
  return function(num) {
    return count + num
  }
}

var adder5 = makeAdder(5)

adder5(10)

adder5(20)

adder5(30)