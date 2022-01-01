// ES11 之前  MAX_SAFE_INTEGER

const maxInt = Number.MAX_SAFE_INTEGER

console.log(maxInt)

// 無法正確顯示
console.log(maxInt + 2)

// ES11 BigInt
const bigInt = 9007199254740991028383n

// 要進行加減需要相同類型
console.log(bigInt + 100n)

const num = 100
console.log(bigInt + BigInt(num))