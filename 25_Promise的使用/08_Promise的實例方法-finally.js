const promise = new Promise((resolve, reject) => {
  resolve('success')
})

promise.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
}).finally(() => {
  console.log('finally')
})