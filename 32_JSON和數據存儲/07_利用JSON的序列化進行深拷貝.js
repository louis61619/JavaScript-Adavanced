const obj = {
  name: 'Louis',
  age: 26,
  friends: [
    {
      name: 'Renny',
      age: 18
    }
  ]
}

// 直接賦值
const info1 = obj

// 淺拷貝
const info2 = { ...obj }

// 深拷貝
const jsonString = JSON.stringify(obj)
const info3 = JSON.parse(jsonString)
