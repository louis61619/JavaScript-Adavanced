var a = "Hello World";

// a查找的是AO對象
function foo() {
  console.log(a);
  return;
  var a = "Hello fun";
}

foo();
