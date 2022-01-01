

new Promise((resolve, reject) => {
  // pending 階段
  resolve()
}).then(res => {
  // fulfilled 階段
  console.log(res)
}, err => {
  // rejected 階段
  console.log(err)
})