var obj = {
  name: 'Louis',
  age: {
    aa: 'dejiej'
  }
}

// 禁制物件添加新的屬性
// Object.preventExtensions(obj)

// 禁止物件配置/刪除屬性
// for(var key in obj) {
//   Object.defineProperty(obj, key, {
//     configurable: false,
//     enumerable: true,
//     writable: true,
//     value: obj[key]
//   })
// }

Object.seal(obj)

// obj.name = "aaaa"
delete obj.name

obj.age.bbb = 'ooo'

console.log(obj)

// // 禁止對屬性修改
// Object.freeze(obj)