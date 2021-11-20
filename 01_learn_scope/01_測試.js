function foo(num1, num2) {
  const result = num1 + num2;
  console.log(result);
}

foo(8, 8);

// prePaser 預解析器
function outer() {
  // 不對這個函數解析
  function inner() {}
}

outer();
