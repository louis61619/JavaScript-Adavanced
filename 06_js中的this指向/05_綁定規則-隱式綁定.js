// 案例一
function foo() {
  console.log(this);
}

// var obj = {
//   foo: foo,
// };
// // 會得obj
// obj.foo();

// 案例二
var obj1 = {
  name: "obj1",
  foo: foo,
};

var obj2 = {
  name: "obj2",
  bar: obj1.foo,
};

obj2.bar();
