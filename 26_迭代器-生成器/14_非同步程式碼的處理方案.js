function requestData(params) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(params)
    }, 200)
  })
}

// 第一種方案 多次回調
// requestData('aaa').then(res => {
//   requestData(res + 'bbb').then(res => {
//     console.log(res)
//   })
// })

// // 第二種方案 返回promise
// requestData('aaa').then(res => {
//   return requestData(res + 'bbb')
// }).then(res => {
//   console.log(res)
// })

// 第三種方案 Promise + generator
// function* getData() {
//   const res1 = yield requestData('aaa')
//   const res2 = yield requestData(res1 + 'bbb')
//   console.log(res2)
// }

// const generator = getData()

// generator.next().value.then(res => {
//   generator.next(res).value.then(res => {
//     generator.next(res)
//   })
// })

// function execGenerator(genFn) {
//   const generator = genFn()

//   function exec(res) {
//     const result = generator.next(res)
//     if (result.done) {
//       return result.value
//     }
//     result.value.then(res => {
//       exec(res)
//     })
//   }

//   exec()
// }

// execGenerator(getData)


// 第三方 co 自動執行
// const co = require('co')
// co(getData)


async function getData() {
  const res1 = await requestData('aaa')
  const res2 = await requestData(res1 + 'bbb')
  console.log(res2)
}
getData()