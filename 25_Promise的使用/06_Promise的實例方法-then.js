// console.log(Object.getOwnPropertyDescriptors(Promise))

const promise = new Promise((resolve, reject) => {
  resolve('1111')
})

// 當 resolve 被調用時，所有 then 方法都會被調用
// promise.then(res => {
//   console.log(res)
// })

// promise.then(res => {
//   console.log(res)
// })


// promise.then(res => {
//   console.log(res)
// })

// 當返回一個普通值，那麼這個值會作為一個新的 Promis 的 resolve 值
// 不返回就是將 undefined 作為一個新的 Promis 的 resolve 值
// promise.then(res => {
//   return '123'
// }).then(res => {
//   console.log(res)
// })

// 返回 Promise 就是由該 Promise 決定狀態
promise.then(res => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('123')
    }, 300)
  })
}).then(res => {
  console.log(res)
})

// 如果返回一個物件，並且該物件實現 thenable
promise.then(res => {
  return {
    then(resolve) {
      resolve('---')
    }
  }
}).then(res => {
  console.log(res)
})