const btns = document.getElementsByTagName('button')

console.log(btns)

for(var i = 0; i < btns.length; i ++) {
  // btns[i].onclick = function() {
  //   console.log("第" + i + "個按鈕")
  // }
  (function(n) {
    btns[n].onclick = function() {
      console.log("第" + n + "個按鈕")
    }
  })(i)
}