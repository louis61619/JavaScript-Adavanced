const divEl = document.querySelector('div')

const spanEl = document.querySelector('#span')

// 常見的屬性
console.log(divEl.nodeName, divEl.nodeType)

// childNodes
console.log(divEl.childNodes[0].nodeValue)

// 插入元素
const strongEl = document.createElement('strong')
strongEl.textContent = '我是 strong 元素'
divEl.appendChild(strongEl)