// 案例一
// function foo() {
//   console.log(this);
// }

// // 輸出windo或是global
// foo();

// 案例二
// function foo1() {
//   console.log(this);
// }

// function foo2() {
//   console.log(this);
//   foo1();
// }

// function foo3() {
//   console.log(this);
//   foo2();
// }

// foo3();

// 案例三
var obj = {
  foo: function () {
    console.log(this);
  },
};
var bar = obj.foo;
bar();

// 案例四
function foo() {
  function bar() {
    console.log(this);
  }
  return bar;
}

var fn = foo();
fn();
