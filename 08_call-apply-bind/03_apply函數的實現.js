Function.prototype.myapply = function(thisArg, argArray) {
  // 獲取函數
  var fn = this

  // 轉化為物件
  thisArg = thisArg !== undefined && thisArg !== null && Object(thisArg) || window

  // 隱式綁定
  thisArg.fn = fn
  
  // 對不傳參數進行處理
  argArray = argArray !== undefined && argArray !== null && argArray || []
  var result = thisArg.fn(...argArray)
  delete thisArg.fn

  // 返回結果
  return result
}

function foo(n1, n2) {
  console.log('foo函數執行', this)
  return n1 + n2
}

var result = foo.myapply("louis", [20, 30])
console.log(result)

foo.myapply('122')