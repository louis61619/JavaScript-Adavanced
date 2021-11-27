// this的指向，跟函數所處的位置是沒有關係的

function foo() {
  console.log(this);
}

// 調用方式一: 函數調用
foo();

var obj = {
  foo: foo,
};

obj.foo();

foo.call("abc");
