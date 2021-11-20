// js引擎會認為這個語法是直接對GO進行賦值 不過算是一個語法錯誤
function foo() {
  m = 100;
}

foo();
console.log(m);
