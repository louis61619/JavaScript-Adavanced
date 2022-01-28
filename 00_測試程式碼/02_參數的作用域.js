var x = 0

// 當參數有默認值時會形成一個作用域，這個作用域用於保存參數的值
// 全局 ＝> 參數 ＝> 函數
function foo(x, y = function() { x = 3; console.log(x) }) {
  // undefined
  console.log(x)
  var x = 2
  // 3
  y()
  // 2
  console.log(x)
}

foo()
console.log(x)