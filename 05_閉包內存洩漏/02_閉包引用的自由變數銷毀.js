function foo() {
  var name = 'Louis'
  var age = 18

  // js 引擎為了優化會將AO物件未被閉包引用的變數銷毀
  function bar() {
    debugger
    console.log(name)
  }
  return bar
}

const fn = foo()
fn()