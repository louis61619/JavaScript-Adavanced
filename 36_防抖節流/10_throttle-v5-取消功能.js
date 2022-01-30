
// leading 頭部
// trailing 尾部

function throttle(fn, interval, options = { leading: true, trailing: false }) {
  const { leading, trailing } = options
  let lastTime = 0
  let timer = null

  function _throttle(...args) {
    const nowTime = new Date().getTime()
    if(!lastTime && !leading) lastTime = nowTime

    // 計算當間隔小於當前時間減去上一次紀錄的時間就要被執行
    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      fn.apply(this, args)
      lastTime = nowTime
      return
    }

    // 改以定時器的方式判斷間隔
    if (trailing && !timer) {
      timer = setTimeout(() => {
        timer = null
        lastTime = !leading ? 0 : new Date().getTime()
        fn.apply(this, args)
      }, remainTime)
    }
  }

  _throttle.cancel = function() {
    if (timer) clearTimeout(timer)
    timer = null
    lastTime = 0
  }

  return _throttle
}
