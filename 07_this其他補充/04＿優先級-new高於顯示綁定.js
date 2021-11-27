function foo() {
  this.name = "jdeijedei";
  console.log(this);
}

var bar = foo.bind("aaa");

var obj = new bar();
