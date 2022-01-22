

async function foo() {

  // 返回一個值
  // return '123'

  // 返回一個 thenable
  // return {
  //   then: function(resolve) {
  //     resolve('123')
  //   }
  // }

  // 返回一個 promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('123')
    }, 1000)
  })
}

const promise = foo()

promise.then(res => {
  console.log(res)
})