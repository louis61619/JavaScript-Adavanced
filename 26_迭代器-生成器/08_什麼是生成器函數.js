function* foo() {

  // 1.
  console.log('生成器函數開始')
  const value1 = 100
  console.log(value1)
  yield

  // 2. 
  const value2 = 200
  console.log(value2)
  yield

  // 3.
  const value3 = 300
  console.log(value3)
  yield

  // 4.
  console.log('生成器函數結束')
}

const generator = foo()

generator.next()
generator.next()
generator.next()
generator.next()