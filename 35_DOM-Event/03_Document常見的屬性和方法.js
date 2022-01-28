// 常見的屬性

console.log(document.body)
console.log(document.title)

document.title = 'Hello World'

// html
document.children[0]

document.location

const imageEl = document.createElement('img')
const imageEl2 = new Image()

// 獲取元素
const divEl0 = document.getElementById('div')
const divEl1 = document.getElementsByTagName('div')
const divEl2 = document.getElementsByName('div')
const divEl3 = document.querySelector('div')
const divEl4 = document.querySelectorAll('div')

console.log(divEl0, divEl1[0], divEl2[0], divEl3, divEl4[0])