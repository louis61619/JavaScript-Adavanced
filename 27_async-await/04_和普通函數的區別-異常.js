

async function foo() {

  throw new Error('-----')
  // 返回一個值
  return '123'
}

// foo().catch(err => {
//   // console.log(err)
// })

const promise = foo()

promise.then(res => {

}).catch(err => {
  console.log(err)
})



console.log('後續代碼')