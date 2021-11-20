var message = "Hello Message";

// foo 函數的作用域在GO這邊
function foo() {
  console.log(message);
}

function bar() {
  var message = "Hello function";
  foo();
}

bar();
