function foo() {
  var a = (b = 100);

  // 轉成
  // var a = 100;
  // b = 100;
}

foo();
// 會直接找不到a
// 因為沒有定義
// console.log(a);
console.log(b);
