var foo = () => {};

// var foo = function() {

// }

function bar() {}

var nums = [10, 20, 45, 78];

// 箭頭函數只有一個可以不加上括號
nums.forEach(item => {
  console.log(item);
});

// 箭頭函數行體只有一行程式碼，中括號可以省略
// 並會將執行結果默認返回
nums.forEach(item => console.log(item))
nums.filter(item => item % 2 === 0)

// 高階函數連續使用
nums.filter(item => item % 2 === 0)
    .map(item => item * 100)
    .reduce((preValue, item) => preValue + item)

// 返回一個物件
var bar = () => ({ name: 'louis', age: 19 })