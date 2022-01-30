// function throttle(fn, delay) {
//   let canExex = true
//   function _throttle() {
//     if (canExex) {
//       canExex = false
//       fn()
//       setTimeout(() => {
//         canExex = true
//       }, delay)
//     }
//   }
//   return _throttle
// }


function throttle(fn, interval) {
  let lastTime = 0
  function _throttle() {
    const nowTime = new Date().getTime()
    // 計算當間隔小於當前時間減去上一次紀錄的時間就要被執行
    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      fn()
      lastTime = nowTime
    }
  }

  return _throttle
}
