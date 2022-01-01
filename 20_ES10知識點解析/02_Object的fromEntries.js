const obj = {
  name: 'Louis',
  age: 26,
}

// const entries = Object.entries(obj)
const entries = [['name', 'Louis'], ['age', 26]]

console.log(entries)

// 手動將 entires 轉為物件
const newObj = {}
for (const [key, value] of entries) {
  newObj[key] = value
}

// ES10 新增了 Object.fromEntries 方法
const newObj2 = Object.fromEntries(entries)
console.log(newObj2)


// 應用場景
const queryString = 'name=why&age=26&height=1.73'
const queryParams = new URLSearchParams(queryString)
// for(const param of queryParams) {
//   console.log(param)
// }
const paramObj = Object.fromEntries(queryParams)
console.log(paramObj)
