

function foo(fun) {
  fun()
}

function bar() {
  console.log('--------------')
}

foo(bar)


function calc(num1, num2, fun) {
  return fun(num1, num2, fun)
}

function add(num1, num2) {
  num1 + num2
}