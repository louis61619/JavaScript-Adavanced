function* foo() {

  const value1 = 100
  // 透過第一個 yield 的返回值，能夠獲取第二個 next 傳入的參數
  const n = yield value1

  const value2 = 200 * n
  yield value2
}

const generator = foo()

console.log(generator.next())
console.log(generator.next(10))