Function.prototype.mybind = function(thisArg, ...argArray) {
  // 獲取需要調用的函數
  var fn = this

  // 綁定this
  thisArg = thisArg !== null && thisArg !== undefined && Object(thisArg) || window

  // bind和call、apply最大的差別是要返回一個函數
  function proxyFn(...args) {
    // 將獲取到的函數用隱式綁定調用
    thisArg.fn = fn
    
    // 做參數的合併
    var result = thisArg.fn(...argArray, ...args)
    delete thisArg.fn
    return result
  }
  return proxyFn
}

function foo(n1, n2, n3) {
  console.log(n1, n2, n3)
}

// 原生的bind
// var bar = foo.bind("abc", 5)
// bar(10, 20)

var bar = foo.mybind("abc", 5)
bar(10, 20)



