
// 如果有一個函數在調用時，內部出現了錯誤，應該告知調用者這是一個錯誤
function sum(num1, num2) {
  if(typeof num1 !== "number" || typeof num2 !== 'number') {
    // 強制調用者進行處理
    throw 'parameters must be number'
  }
  return num1 + num2
}

console.log(sum({ name: 'Louis' }))