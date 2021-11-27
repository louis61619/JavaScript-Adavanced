
// var foo = () => {

//   console.log(arguments)
// }

// // 在瀏覽器中箭頭函數沒有arguments
// foo()

// 模擬noejs
// function foo() {
//   var bar = () =>  {
//     console.log(arguments)
//   }
//   bar()
// }

// foo(123)


function foo(num1, num2, ...nums) {
  console.log(nums)
}

foo(10, 20, 30, 40, 50)