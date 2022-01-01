var obj = {
  name: 'Louis',
  age: 26
}

obj['name'] = 'Renny'


// ES6 中 symbol 的使用
const s1 = Symbol()
const s2 = Symbol()

// 在ES2019 中 symbel 可以傳入一段描述（description）
const s3 = Symbol('aaa')
console.log(s3.description)



// Symbol 作為 key
// 使用字面量
const newObj = {
  [s1]: 'Renny'
}

// 新增屬性
newObj[s2] = 'fjeijfei'

Object.defineProperty(newObj, s3, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 'jifjeij'
})

console.log(newObj[s1], newObj[s2], newObj[s3])

// 如果要獲取所有的key
const skeys = Object.getOwnPropertySymbols(newObj)
console.log(skeys)

for(const skey of skeys) {
  console.log(skey)
}

// Symbol.for / Symbol.keyFor 可以定義相同的key
const sa = Symbol.for('aaa')
const ab = Symbol.for('aaa')
console.log(sa === ab)

console.log(Symbol.keyFor(sa))