// 給所有的函數添加一個mycall的方法
Function.prototype.mycall = function(thisArg, ...args) {
  // 要怎麼獲得是哪一個函數調用了mycall
  // 答案透過this
  // console.log('mycall被調用', this)

  // 獲取需要被執行的函數
  var fn = this

  // 對thisArg轉化為物件類型
  thisArg = thisArg !== undefined && thisArg !== null && Object(thisArg) || window
  
  // 用隱式綁定this
  thisArg.fn = fn
  var result = thisArg.fn(...args)
  delete thisArg.fn

  // 將最終的結果進行返回
  return result
}

function foo(n1, n2) {
  console.log("foo函數被執行了", this, n1, n2)
  return n1 + n2
}

foo.mycall({name: 'louis'})
foo.mycall("louis")
foo.mycall(null)
foo.mycall(undefined)
var result = foo.mycall("louis", 20, 30)

console.log(result)