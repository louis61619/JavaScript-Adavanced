function foo() {
  var name ="louis"

  // 為什麼能獲取原本應該銷毀的name呢?
  function bar(){
    console.log(name)
  }
  return bar
}

var fn = foo()
fn()

// 避免產生內存洩漏
fn = null