
function debounce(fn, delay, immediate = false, resultCallback) {
  let timer = null
  let isInvoke = false
  let invokeTimer = null

  function _debounce(...args) {
    return new Promise((resolve, reject) => {
      if (timer) clearTimeout(timer)
      if (invokeTimer) clearTimeout(invokeTimer)

      if (immediate && !isInvoke) {
        const result = fn.apply(this, args)
        if (resultCallback) resultCallback(result)
        resolve(result)
        isInvoke = true
        
        // 立即執行的 timer
        invokeTimer = setTimeout(() => {
          isInvoke = false
        }, delay)
      } else {
        timer = setTimeout(() => {
          const result = fn.apply(this, args)
          if (resultCallback) resultCallback(result)
          resolve(result)
          isInvoke = false
          timer = null
        }, delay)
      }
    })
    
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