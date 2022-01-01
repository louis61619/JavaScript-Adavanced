const names = ['abc', 'jcj', 'djd']

// 不可用const 因為後面有 i++
for(let i = 0; i < names.length; i++) {

}

// {
//   let i = 0
//   console.log(names[i])
// }
// {
//   let i = 1
//   console.log(names[i])
// }
// {
//   let i = 2
//   console.log(names[i])
// }

// for ... of es6新增的遍歷陣列
for(const item of names) {

}