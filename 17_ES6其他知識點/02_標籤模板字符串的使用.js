// 第一個參數依然是模板字符串中整個字符串，只是被切成多塊，放到一個陣列中
// 第二個參數是模板字符串中的第一個 ${}

function foo(m, n) {
  console.log(m, n)
}

const name = 'Louis'
const age = 26

foo`Hello${name}World`