function foo(num1, num2, num3) {
  console.log(arguments)

  // 常見的對arguments的操作有三個

  // 1. 獲取參數的長度
  console.log(arguments.length)

  // 2. 透過索引值獲取參數
  console.log(arguments[0])

  // 3. callee獲取當前的函數
  console.log(arguments.callee)


  console.log(num1, num2, num3)
}

foo(10, 20, 30, 40, 50)