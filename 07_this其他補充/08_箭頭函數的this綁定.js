var name = "louis"

var foo = () => {
  console.log(this)
}

foo.call("fsfs")

// 應用場景
var obj = {
  data: [],
  getData: function() {
    // 在箭頭函數之前的解決方案
    var _this = this
    setTimeout(function () {
      var result = ["aaa", "fff", "ddd"]
      _this.data = result
    }, 2000)

    setTimeout(() => {
      var result = ["aaa", "fff", "ddd"]
      this.data = result
    }, 2000)
  }
}
obj.getData()