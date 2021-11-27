// 在大多數情況下，this都是出現在函數中
// 在全局作用下
// 瀏覽器: window

// Node環境: {}
// 在Node中文件會作為一個模塊 module => 加載 => 編譯 => 放到一個函數 => 執行這個call;

// module.exports = {
//   aaa: "jdfieojdwo",
// };

exports.obj = {
  foo: "foo",
};

console.log(this);
