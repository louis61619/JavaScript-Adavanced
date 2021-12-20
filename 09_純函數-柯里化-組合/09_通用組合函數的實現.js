function myCompose(...fns) {
  var fnsLength = fns.length
  // 判斷fns有沒有非函數
  for(var i = 0; i < fnsLength; i++) {
    if(typeof fns[i] !== 'function') {
      throw new TypeError('Excepted arguments are function')
    }
  }

  function compose(...args) {
    // for迴圈寫法
    // if(!fnsLength) return args
    // var result = fns[0](...args);
    // for(var i = 1; i < fnsLength; i++) {
    //   result = fns[i].call(this, result)
    // }
    // return result

    // while寫法
    var index = 0
    var result = fnsLength ? fns[index].apply(this,  args): args
    while(++index < fnsLength) {
      result = fns[index].call(this, result)
    }
    return result
  }

  return compose
}

function double(num) {
  return num * 2
}

function square(num) {
  return num ** 2
}


const doubleAndSquare = myCompose(double, square)

console.log(doubleAndSquare(10))