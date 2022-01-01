
// ES5 之前沒有塊極作用域
// 在 ES5 中只有兩個東西會形成作用域，第一個是全局作用域，第二個是函數作用域。

// {
//   var foo = 'foo'
// }

// console.log(foo)


function foo() {
  var bar = "foo"
}

console.log(bar)