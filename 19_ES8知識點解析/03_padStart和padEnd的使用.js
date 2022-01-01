const message = 'Hello World'

const newMessage = message.padStart(15, '*').padEnd(20, '-')

console.log(newMessage)


// 案例
const cardNumber = '122333493949494'
const lastFourNumber = cardNumber.slice(-4)
const finalNumber = lastFourNumber.padStart(cardNumber.length, '*')
console.log(finalNumber)