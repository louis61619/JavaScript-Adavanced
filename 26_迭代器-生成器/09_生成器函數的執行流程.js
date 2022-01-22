function* foo() {

  // 1.
  console.log('生成器函數開始')
  const value1 = 100
  yield value1

  // 2. 
  const value2 = 200
  yield value2

  // 3.
  const value3 = 300
  yield value3

  // 4.
  console.log('生成器函數結束')
  // 結束時返回
  return '123'
}

const generator = foo()

console.log(generator.next())
console.log('------')
console.log(generator.next())
console.log('------')
console.log(generator.next())
console.log('------')
console.log(generator.next())
