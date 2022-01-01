const promise = new Promise((resolve, reject) => {
  throw new Error()
  // reject('1111')
})

// 當 excutor 拋出異常時，也會調用錯誤捕獲的回調函數
promise.catch(err => {
  console.log('---')
})

// catch 也可以寫在 then 方法之後，相當於一個語法糖，前面的 promise 拋出的錯誤都會進行捕獲
promise.then(res => {
  return new Promise((resolve, reject) => {
    reject('error')
  })
}).catch(err => {
  console.log(err)
})

// 這樣調用會報錯，因為相當於兩次獨立的調用
// promise.then(res => {

// })
// promise.catch(err => {

// })


// catch也是返回一個 promise
promise.then(res => {

}).catch(err => {
  return '-----'
}).then(res => {
  console.log(res)
})
