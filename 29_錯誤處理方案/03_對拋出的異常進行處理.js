function foo() {
  throw new Error('foo error')
}

function bar() {
  try {
    foo()
  } catch (error) {
    console.log(error.message)
  } finally {
    console.log('finally~')
  }
  
}

function baz() {
  try {
    foo()
  } catch  {
    console.log('error')
  } finally {
    console.log('finally~')
  }
  
}

baz()

// 異常是會一層層往上拋出的
bar()