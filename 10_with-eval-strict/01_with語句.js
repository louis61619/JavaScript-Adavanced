
// with 語句：可以形成自己的作用域

var message = 'Hello World'

var obj = {
  name: 'why',
  age: 19,
  message: 'Hello Obje'
}

function foo() {
  function bar() {
    with(obj) {
      console.log(message)
    }
  }
  bar()
}

foo()