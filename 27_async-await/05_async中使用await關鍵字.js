

// await promise
async function foo() {
  const res = await new Promise((resolve) => {
    resolve('123')
  })
  console.log(res)
}
foo()


// await 普通值
async function foo1() {
  // const res = await 123

  // thenable
  const res = await {
    then: function(resolve) {
      resolve('1111')
    }
  }

  console.log(res)
}

foo1()



async function foo2() {
  const res = await new Promise((resolve, reject) => {
    reject('123---')
  })
  console.log(res)
}
foo2().catch(res => {
  console.log(res)
})