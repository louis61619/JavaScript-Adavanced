
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('1111')
  }, 500)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('2222')
  }, 200)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('333')
  }, 700)
})

Promise.race([p1, p2, p3]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})