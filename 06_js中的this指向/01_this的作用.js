// 沒有this也是可以編寫程式碼的
// 但是沒有this會讓我們寫程式變得不太方便

var obj = {
  name: "why",
  eating: function () {
    console.log(this.name + "在吃東西");
  },
  running: function () {
    console.log(this.name + "在跑步");
  },
  studing: function () {
    console.log(this.name + "在學習");
  },
};

obj.eating();

// var obj = {
//   name: "why",
//   eating: function () {
//     console.log(obj.name + "在吃東西");
//   },
//   running: function () {
//     console.log(obj.name + "在跑步");
//   },
//   studing: function () {
//     console.log(obj.name + "在學習");
//   },
// };
