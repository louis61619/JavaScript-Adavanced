function debounce(fn, delay, immediate = false) {
  let timer = null
  let isInvoke = false
  let invokeTimer = null

  function _debounce(...args) {
    if (timer) clearTimeout(timer)
    if (invokeTimer) clearTimeout(invokeTimer)

    if (immediate && !isInvoke) {
      fn.apply(this, args)
      isInvoke = true
      
      // 立即執行的 timer
      invokeTimer = setTimeout(() => {
        isInvoke = false
      }, delay)
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
        isInvoke = false
        timer = null
      }, delay)
    }
  }

  // 加入取消功能
  _debounce.cancel = function() {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  return _debounce
}