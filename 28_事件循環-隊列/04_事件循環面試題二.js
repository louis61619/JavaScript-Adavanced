// async function bar() {
//   // return new Promise(function (resolve) {
//   //   resolve()
//   // })
// }

// async function foo() {
//   console.log('1')
//   // awiat 後面會進入微任務
//   await bar()
//   console.log('2')
// }

// foo()
// console.log('3')


async function async1() {
  console.log('async start')
  await async2()
  console.log('async end')
}

async function async2 () {
  console.log('async2')
}

console.log('script start')

setTimeout(function() {
  console.log('setTimeout')
})

async1()

new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})

console.log('script end')