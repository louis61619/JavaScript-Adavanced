
const objPromise = Promise.resolve({name: 'Louis'})

// 等價於

const objPromise2 = new Promise((resolve, reject) => {
  resolve({name: 'Louis'})
})

objPromise.then(res => {
  console.log(res)
})