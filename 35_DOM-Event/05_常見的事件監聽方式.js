function divClick() {
  console.log('div元素被點擊')
}

const divEl = document.querySelector('.box')
// divEl.onclick = function() {
//   console.log('div元素被點擊')
// }

divEl.addEventListener('click', () => {
  console.log('div元素被點擊')
})