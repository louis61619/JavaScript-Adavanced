// var obj = {
//   foo: function () {
//     console.log(this);
//   },
// };

// // call/apply高於隱式綁定
// obj.foo.apply("aaa");

// bind的優先級高於隱式綁定
function foo() {
  console.log(this);
}

var obj = {
  foo: foo.bind("aaa"),
};

obj.foo();
