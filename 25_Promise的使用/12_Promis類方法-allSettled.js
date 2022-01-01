
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
    reject('333')
  }, 700)
})

// allSettled 最終一定是調用 then 方法
Promise.allSettled([p1, p2, p3, '---']).then((res) => {
  // [
  //   { status: 'fulfilled', value: '1111' },
  //   { status: 'fulfilled', value: '2222' },
  //   { status: 'rejected', reason: '333' },
  //   { status: 'fulfilled', value: '---' }
  // ]
  console.log(res)
})