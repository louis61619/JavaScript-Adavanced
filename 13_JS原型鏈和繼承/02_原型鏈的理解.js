var obj = {
  name: 'Louis',
  age: 26
}

// 1. [[get]]操作
// 2. 在當前物件中查找屬性
// 3. 如果沒有找到會從 __proto__ 上查找


// 物件上的原型
// obj.__proto__ = {
//   address: '台北市'
// }

// 原型鏈
obj.__proto__ = {
}

obj.__proto__.__proto__ = {
}

obj.__proto__.__proto__.__proto__ = {
  address: '台北市'
}

console.log(obj.address)