setTimeout(function () {
  console.log('setTimeout1')

  new Promise(function (resolve) {
    resolve()
  }).then(function () {
    new Promise(function (resolve) {
      resolve()
    }).then(function () {
      console.log('then4')
    })
    console.log('then2')
  })

  setTimeout(function () {
    console.log('setTimeout3')
  });
})


new Promise(function (resolve) {
  console.log('promise 1')
  resolve()
}).then(function () {
  console.log('then 1')
})

setTimeout(function () {
  console.log('setTimeout2')
});

console.log(2)

queueMicrotask(() => {
  console.log('queueMicrotask1')
})

new Promise(function (resolve) {
  resolve()
}).then(function () {
  console.log('then3')
})