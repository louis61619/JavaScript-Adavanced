// 'use strict'

var obj = {
  name: 'Louis',
  age: 26
}

Object.defineProperty(obj, "height", {
  // 不可刪除/不可重新定義
  configurable: false,
  // 不可被列舉
  enumerable: false,
  // 不可被修改
  writable: false,
  value: 'jfieji'
})



obj.height = 'jiji'

console.log(obj.height)