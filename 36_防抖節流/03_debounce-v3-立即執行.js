function debounce(fn, delay, immediate = false) {
  let timer = null
  let isInvoke = false

  function _debounce(...args) {
    if (timer) clearTimeout(timer)

    // 判斷是否需要立即執行
    if (immediate && !isInvoke) {
      fn.apply(this, args)
      isInvoke = true
      setTimeout(() => {
        console.log('延遲取消')
        isInvoke = false
      }, delay)
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
        isInvoke = false
      }, delay)
    }
  }
  return _debounce
}