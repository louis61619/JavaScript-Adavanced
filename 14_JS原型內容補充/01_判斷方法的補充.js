var obj = {
  name: 'Louis',
  age: 25
}

var info = Object.create(obj, {
  address: {
    value: '新北市',
    enumerable: true
  }
})

// hasOwnProperty 方法判斷
console.log(info.hasOwnProperty("address"))
// 在原型上的不算
console.log(info.hasOwnProperty("name"))


// in 操作符
// in 操作符號不管是不是在原型上的屬性都可以獲取
// 一般物件中存放在 __proto__ 的屬性都是不可列舉的
console.log("address" in info)
console.log("name" in info)
for(var key in info) {
  console.log(key)
}

// console.log(obj.__proto__)