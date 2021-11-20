/**
 * 1. 執行到 var n = 100時，GO對象中 n = 100
 * 2. foo 函數時執行，創建AO對象 因為其內部存在n 所以在編譯階段n會被賦值為undefined
 * 3. 執行 var n = 200
 * 4. n打印
 */

function foo() {
  console.log(n);
  var n = 200;
  console.log(n);
}

var n = 100;
foo();
