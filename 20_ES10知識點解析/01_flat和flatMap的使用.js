const nums = [10, 20, [2, 9], [9, [30, [40, 20, 40]]]]


console.log(nums.flat(1))

console.log(nums.flat(2))


const messages = ['Hello everyone', 'My name is Louis', 'I am 26 years old']
const newMessages = messages.flatMap(item => {
  return item.split(' ')
})

// [
//   'Hello', 'everyone',
//   'My',    'name',
//   'is',    'Louis',
//   'I',     'am',
//   '26',    'years',
//   'old'
// ]
console.log(newMessages)