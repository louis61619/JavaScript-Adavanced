var message = "Hello Message";

function foo() {
  console.log(message);
}

function bar() {
  var message = "Hello function";
  foo();
}

bar();
