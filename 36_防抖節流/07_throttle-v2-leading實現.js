
// leading 頭部
// trailing 尾部

function throttle(fn, interval, options = { leading: true, trailing: false }) {
  const { leading } = options
  let lastTime = 0
  function _throttle(...args) {
    const nowTime = new Date().getTime()
    if(!lastTime && !leading) lastTime = nowTime
    // 計算當間隔小於當前時間減去上一次紀錄的時間就要被執行
    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      fn.apply(this, args)
      lastTime = nowTime
    }
  }

  return _throttle
}
