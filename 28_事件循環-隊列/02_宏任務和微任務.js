setTimeout(() => {
  console.log('setTimeout')
})

queueMicrotask(() => {
  console.log('queueMicrotask')
})

Promise.resolve().then(res => {
  console.log('Promise then')
})