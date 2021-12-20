

function myCurring(fn) {
  // console.log(fn)
  function curried(...args) {
    // 判斷fn的函數和當前傳入的函數數量是否一致
    if(args.length >= fn.length) {
      // 要使用apply才能將外層綁定的this傳入
      return fn.apply(this, args)
    } else {
      // 使用遞歸重複調用curried，重點是將下次傳入的參數拼接上次傳入的參數
      return function(...args2) {
        return curried.apply(this, [...args, ...args2])
      }
    }
  }
  return curried
}

// function foo() {
//   console.log(this)
// }


function add(x, y, z) {
  x = 0 + x
  y = y * 2
  z = z * z

  return x + y + z
}

const curringAdd = myCurring(add)

const result = curringAdd(10)(20)(30)
console.log(result)
console.log(add(10, 20, 30))