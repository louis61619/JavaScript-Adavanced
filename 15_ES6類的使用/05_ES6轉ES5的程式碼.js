// class Person {

// }

// // 使用 babel 7.15轉化
// function _classCallCheck(instance, Constructor) {
//   // 判斷 this 是不是 Person 的實例 (運行中的類)
//   if (!(instance instanceof Constructor)) { 
//     throw new TypeError("Cannot call a class as a function"); 
//   } 
// }

// var Person = function Person() {
//   // 目的是為了讓這個函數不被用普通的方式進行調用
//   _classCallCheck(this, Person);
// };



// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   eating() {
//     console.log(this.name + ' 再吃東西')
//   }
// }


// -------- 透過 babel 轉化爲 ES5 之後 ---------

"use strict";

// 檢測該函數是不是作用構造函數進行調用
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// 傳入陣列進行遍歷，然後透過 defineProperty 去添加屬性
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    console.log(target, descriptor.key, descriptor)
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

// 透過一個封裝好的函數為構造函數的 prototype 添加構造方法和靜態方法
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

// 放在函數作用域中避免與全局變數衝突
// /*#__PURE__*/ 標記為純函數，使用 webpack壓縮時可以進行 tree shaking
var Person = /*#__PURE__*/ (function () {
  function Person(name, age) {
    // 目的是為了讓這個函數不被用普通的方式進行調用
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  // 通過調用這個函數進行方法的添加
  _createClass(Person, [
    {
      key: "eating",
      value: function eating() {
        console.log(this.name + " 再吃東西");
      }
    }
  ]);

  return Person;
})();
