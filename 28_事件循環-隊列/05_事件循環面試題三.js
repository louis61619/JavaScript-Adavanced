Promise.resolve().then(() => {
  console.log(0)
  // 非普通的值，多加一次微任務，resolve 又多加上一次
  return Promise.resolve(4)
}).then((res) => {
  console.log(res)
})

Promise.resolve().then(() => {
  console.log(1)
}).then(() => {
  console.log(2)
}).then(() => {
  console.log(3)
})