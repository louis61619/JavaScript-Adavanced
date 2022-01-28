const obj = {
  name: 'Louis',
  age: 26,
  toJSON() {
    return "111"
  }
}


// 直接轉化
const jsonString1 = JSON.stringify(obj)
console.log(jsonString1)

// 過濾 replacer
const jsonString2 = JSON.stringify(obj, ['name'])
console.log(jsonString2)

// 回調函數
const jsonString3 = JSON.stringify(obj, (key, value) => {
  if (key === 'age') {
    return value + 1
  }
  return value
})
console.log(jsonString3)

// 第三個參數 space
const jsonString4 = JSON.stringify(obj, undefined, " ")
// {
//   "name": "Louis",
//   "age": 26
//  }
console.log(jsonString4)

// 如果轉化的目標物件包含 toJSON 方法，會執行該方法並返回結果