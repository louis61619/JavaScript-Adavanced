// ES6 之前拼接字符串

const name = 'Louis'

const age = 18

console.log('my name is ' + name + ', age is ' + age)


console.log(`my name is ${name}, age is ${age}`)


console.log(`my name is ${name}, age is ${age * 2}`)

function doubleAge() {
  return age * 2
}

console.log(`my name is ${name}, age is ${doubleAge()}`)
