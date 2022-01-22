function foo() {
  console.log('----')
}

setTimeout(() => {
  console.log('set---')
})

console.log('1-----')
foo()