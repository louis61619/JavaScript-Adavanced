/**
 * 1. 創建GO對象 GO: {n: undefined}
 * 2. GO中的 n 被賦值為100
 * 3. GO中的 n 被賦值為200
 * 4. 打印 n 為 200
 */

var n = 100;

function foo() {
  n = 200;
}

foo();

console.log(n);
