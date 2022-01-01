
// const objPromise = Promise.reject({name: 'Louis'})

// 等價於

const objPromise2 = new Promise((resolve, reject) => {
  reject({name: 'Louis'})
})

// objPromise.catch(err => {
//   console.log(err)
// })

objPromise2.catch(err => {
  console.log(err)
})