function foo() {
  console.log(this);
}

var obj = {
  name: "why",
};

// 可以指定this的綁定物件
foo.call(obj);
foo.apply(obj);

// call和apply的區別
function sum(num1, num2) {
  console.log(num1 + num2, this);
}

// 如果要加上參數，call是依次傳遞，apply是放在陣列中
sum.call("call", 20, 30);
sum.apply("apply", [20, 30]);

// call和apply在執行函數時，是可以明確的綁定this，稱爲顯示綁定
