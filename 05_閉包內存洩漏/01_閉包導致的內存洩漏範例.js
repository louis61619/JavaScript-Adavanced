function createArr() {
  // 1M = 1024KB
  // 1 kb = 1024 byte
  // int類型  1個佔據4byte
  // 總共佔據4M內存
  const arr = new Array(1024*1024).fill(1)
  return function() {
    console.log(arr.length)
  }
}



var arr = []


for(var i=0; i<100; i++) {
  setTimeout(() => {
    arr.push(createArr())
  }, i * 100)
  
}

// GC不是立即執行的

setTimeout(() => {
  for(var i=0; i< 50; i++) {
    setTimeout(() => {
      arr.pop()
    }, i * 100)
  }
}, 10000)
