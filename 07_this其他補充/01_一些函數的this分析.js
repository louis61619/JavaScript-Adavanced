// 計時器
// setTimeout(function () {
//   console.log(this); // 綁定window 因為內部是獨立調用
// }, 2000);

// 監聽點擊
const boxDiv = document.querySelector(".box");

// 通過這種方式只能添加一種點擊操作
boxDiv.onclick = function () {
  // 內部可能是透過使用屬性的方式調用
  console.log(this);
};

// 這種監聽方式可能是透過陣列將所有函數收集，並依次透過call的方式調用
boxDiv.addEventListener("click", function () {
  console.log(this, "1");
});

boxDiv.addEventListener("click", function () {
  console.log(this, "2");
});

boxDiv.addEventListener("click", function () {
  console.log(this, "3");
});

// 高階函數
var names = ["abc", "cba", "jfjf"];
// 第二個參數可以進行this綁定
names.forEach(function (item) {
  console.log(item, this);
}, "afaf");
