
// if 後面跟的就是塊極作用域：
// if (true) {
//   let foo = 'foo'
// }
// console.log(foo)

// switch同
// var bar = 'a'
// switch (bar) {
//   case 'a':
//     let foo = 'foo'
//     break;

//   default:
//     break;
// }
// console.log(foo)

// for同
// for(let i = 0; i < 10; i ++) {
//   console.log("Hello World" + i)
// }

// 沒有作用域所以會讀取全局的變數
// for(var i = 0; i < 10; i ++) {
//   // console.log("Hello World" + i)
//   setTimeout(() => {
//     console.log(i)
//   })
// }

for(var i = 0; i < 10; i ++) {
  // console.log("Hello World" + i)
  (function(n) {
    setTimeout(() => {
      console.log(n)
    })
  })(i)
  
}


// console.log(i)