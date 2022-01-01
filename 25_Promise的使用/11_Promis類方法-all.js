
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('1111')
  }, 500)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('2222')
  }, 200)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('333')
  }, 700)
})

// 只要有一個 promise 變成 reject ，那麼會直接調用 catch
Promise.all([p1, p2, p3, '---']).then(([res1, res2, res3, res4]) => {
  console.log(res1, res2, res3, res4)
}).catch(err => {
  console.log(err)
})