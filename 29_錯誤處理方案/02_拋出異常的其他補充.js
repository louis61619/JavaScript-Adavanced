function foo(type) {
  if (type === 0) {
    // throw { errorCode: 1001 }
    const err = new Error('type can not be zero')
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
  }
}

foo(0)