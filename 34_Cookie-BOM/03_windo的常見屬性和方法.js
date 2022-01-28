// 1. 常見的屬性
// 瀏覽器距離邊界距離
console.log(window.screenX)
console.log(window.screenY)

window.addEventListener('scroll', () => {
  console.log(window.screenY, window.scrollX)
})

// 整個瀏覽器的高度
console.log(window.outerHeight)
// 文檔的高度
console.log(window.innerHeight)

// 滾動
window.scrollTo({ top: 2000 })

// close
// window.close()

// open
// window.open("www.google.com", "_self")

// 常見的事件
window.onload = function() {
  console.log('window 窗口加載完畢')
}
window.blur = function() {
  console.log('window 窗口獲取焦點')
}
const btn = document.querySelector('#hashchange')
btn.onclick = function() {
  location.hash = 'aaa'
}
window.onhashchange = function() {
  console.log("hash is change")
}