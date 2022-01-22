const aaa = {
  name: 'Louis',
  age: 26,
  foo: function() {
    console.log('foo function')
  }
}

setTimeout(() => {
  aaa.age = 18
})


module.exports = aaa