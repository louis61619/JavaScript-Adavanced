const divEl = document.querySelector('div')

console.log(divEl.id)

divEl.setAttribute('my-name', 'Louis')
const value = divEl.getAttribute('my-name')

console.log(value)