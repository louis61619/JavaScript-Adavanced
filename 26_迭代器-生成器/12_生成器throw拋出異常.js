function* foo() {

  const value1 = 100
  try {
    // throw 會在這邊拋出異常，如果有將該異常捕獲程式碼就可以向下執行
    yield value1
  } catch (error) {
    console.log(error)
    yield 'abc'
  }
  
  const value2 = 200
  yield value2
}

const generator = foo()

console.log(generator.next())
console.log('-------')
console.log(generator.throw(10))
console.log('-------')

console.log(generator.next())
console.log(generator.next())