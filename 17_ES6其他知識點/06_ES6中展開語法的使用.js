const names = ["abc", "vj", "fjf"]

const info = { name: 'Louis', age: 28 }

// 函數調用時
function foo(x, y, z) {
  console.log(x, y, z)
}

// foo.apply(null, names)
foo(...names)

// 構造陣列時
const newNames = [...names]

// ES2018
const newInfo = { ...info }