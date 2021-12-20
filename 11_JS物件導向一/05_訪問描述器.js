

var obj = {
  name: 'Louis',
  age: 26,
  _height: 1.75
}

Object.defineProperty(obj, "height", {
  // 不可刪除/不可重新定義
  configurable: true,
  // 不可被列舉
  enumerable: true,
  
  // 以下為訪問描述器
  get: function() {
    return this._height
  },
  set: function(value) {
    this._height = value
  }
})

console.log(obj.height)

