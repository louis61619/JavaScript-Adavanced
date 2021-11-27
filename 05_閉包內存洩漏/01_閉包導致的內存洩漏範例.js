function createArr() {
  // 1M = 1024KB
  // 1 kb = 1024 byte
  // int類型  1個佔據4byte
  // 總共佔據4M內存
  // number 一般來說是佔據 8byte
  // 不過v8會經過特殊的優化，將小於2的32次方的數字轉為4 byte
  // 浮點數默認是 8 byte
  const arr = new Array(1024 * 1024).fill(1);
  return function () {
    console.log(arr.length);
  };
}

var arr = [];

for (var i = 0; i < 100; i++) {
  setTimeout(() => {
    arr.push(createArr());
  }, i * 100);
}

// GC不是立即執行的

setTimeout(() => {
  for (var i = 0; i < 50; i++) {
    setTimeout(() => {
      arr.pop();
    }, i * 100);
  }
}, 10000);
