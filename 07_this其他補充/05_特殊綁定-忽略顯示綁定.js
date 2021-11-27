function foo() {
  console.log(this);
}

// apply/call/bind 如果傳入undefined或是null函數內部會自動綁定window
foo.apply(null);
foo.apply(undefined);

var a = foo.bind(null);
a();
