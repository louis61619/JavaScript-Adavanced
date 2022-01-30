
function debounce(fn, delay) {
  let timer = null

  function _debounce() {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
  return _debounce
}