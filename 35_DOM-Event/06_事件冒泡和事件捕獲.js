
const boxEl = document.querySelector('.box')
const outEl = document.querySelector('.out')

// 事件冒泡
boxEl.addEventListener('click', () => {
  console.log('事件冒泡，box 元素被點擊了')
})
outEl.addEventListener('click', () => {
  console.log('事件冒泡，out 元素被點擊了')
})
document.body.addEventListener('click', () => {
  console.log('事件冒泡，body 元素被點擊了')
})

// 事件捕獲
boxEl.addEventListener('click', () => {
  console.log('事件捕獲，out 元素被點擊了')
}, true)
outEl.addEventListener('click', () => {
  console.log('事件捕獲，box 元素被點擊了')
}, true)
document.body.addEventListener('click', (event) => {
  console.log('事件捕獲，body 元素被點擊了')
  event.stopPropagation()
  event.stopImmediatePropagation()
}, true)