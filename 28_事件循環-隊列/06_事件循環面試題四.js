async function async1() {
  console.log('async start')
  await async2()
  console.log('async end')
}

async function async2() {
  console.log('async2')
}

setTimeout(() => {
  console.log('setTimeout0')
})

setTimeout(() => {
  console.log('setTimeout2')
}, 300)

setImmediate(() => console.log('setImmediate'))

process.nextTick(() => console.log('nextTick1'))

async1()

process.nextTick(() => console.log('nextTick2'))

new Promise(function (resolve) {
  console.log('promise1')
  resolve()
  console.log('promise2')
}).then(function () {
  console.log('promise then')
})

console.log('script end')