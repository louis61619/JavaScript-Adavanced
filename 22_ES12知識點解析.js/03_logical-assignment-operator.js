// || = 邏輯或
let message = ""
// message = message || 'default value'
message ||= 'default value'
console.log(message)

// && = 邏輯與
// const obj = {
//   foo: {
//     baz: '---'
//   }
// }
// obj.foo && obj.foo.baz

let myName = 'Louis'
let otherName = 'Renny'
myName = myName && otherName
myName &&= otherName

console.log(myName)


let message1 = ""
// message = message || 'default value'
message1 ??= 'default value'
console.log(message1)