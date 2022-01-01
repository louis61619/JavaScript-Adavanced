
//ES5
// function foo(m) {
//   m = m || 'aaa'
//   console.log(m)
// }

// foo()

// ES6
function foo(m = '123') {
  console.log(m)
}

foo()

// 物件參數做解構和默認值
function printInfo({name, age} = { name: 'Louis', age: 26 }) {
  console.log(name, age)
}


function printInfo({name = 'Louis', age = 26} = {}) {
  console.log(name, age)
}

// 有默認值的形參最好放到最後，不然要加上 undefined
function bar(z = 30, x, y) {

}

bar(undefined, 10, 20)

// 有默認值之後的參數都不算在 length 中
function baz(x, y, z, m=30, j) {

}

console.log(baz.length)