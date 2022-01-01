

class Person {
  constructor(callback) {
    const foo = () => {}
    const bar = () => {}

    callback(foo, bar)
  }
}

const p = new Person((foo, bar) => {
  foo()
  bar()
})


// 成功時調用 resolve
// 失敗時調用 reject
const promise = new Promise((resolve, reject) => {
  resolve()
})

promise.then(() => {
  console.log('----success---')
})

promise.catch(() => {
  console.log('----err----')
})