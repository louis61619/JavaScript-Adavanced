var moduleB = (function() {
  if(moduleA.name) {
    console.log('my name is ' + moduleA.name)
  }
})()