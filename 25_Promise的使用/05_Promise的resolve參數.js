
// 1. 當傳入 Promise 物件作為 resolve 參數時，那麼當前 Promise 的狀態會交由傳入的 Promise 來決定：
const newPromise = new Promise((resolve, reject) => {

})

new Promise((resolve, reject) => {
  resolve(newPromise)
  // newPromise沒調用resolve, reject所以不會往下執行
}).then(res => {
  console.log(res)
}, err => {
  console.log(err)
})


// 2. 當傳入一個物件，並且該物件有實現 then 方法時，那麼會執行 then 方法，並且由該方法決定後續狀態
const obj = {
  then(resolve, reject) {
    reject('error')
  }
}

new Promise((resolve, reject) => {
  // pending 階段
  resolve(obj)
}).then(res => {
  // fulfilled 階段
  console.log(res)
}, err => {
  // rejected 階段
  console.log(err)
})