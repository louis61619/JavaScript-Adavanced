
// ES6 塊極作用域
// let const function class 有效

{
  let foo = 'foo'
  function demo() {
    console.log('-------')
  }
}

// console.log(foo) // foo is not defined

// 不同的瀏覽器有不同的實現，不過為兼容以前的程式碼，會讓 function 沒有塊極作用域
demo()

