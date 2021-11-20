// var str = "why";

foo();

function foo() {
  console.log(m);
  var m = 100;

  bar();
  function bar() {
    console.log(str);
  }
}
