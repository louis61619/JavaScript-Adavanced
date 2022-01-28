
const boxEl = document.querySelector('.box')

// 事件冒泡
boxEl.addEventListener('click', (event) => {
  console.log('box 元素被點擊了', event)
  console.log('事件的類型', event.type)
  // target 為當前觸發事件的元素， currentTarget 為處理事件監聽的元素
  console.log('事件的元素', event.target, event.currentTarget)
  console.log('事件發生的位置', event.offsetX, event.offsetY)
})

const outEl = document.querySelector('.out')
outEl.addEventListener('click', (event) => {
  console.log('事件的元素', event.target, event.currentTarget)
  console.log('事件發生的位置', event.offsetX, event.offsetY)
})

const aEl = document.querySelector('a')
aEl.addEventListener('click', (event) => {
  event.preventDefault()
})

// event.stopPropagation()