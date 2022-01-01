const obj = {
  name: 'Louis',
  age: 26
}

// 默認將所有操作映射到原物件
const objProxy = new Proxy(obj, {
  // 獲取值時的捕獲器
  get: function(target, key) {
    console.log(`監聽到${target}物件的${key}屬性被訪問了`)
    return target[key]
  },
  // 設置值時的補獲器
  set: function(target, key, newValue) {
    console.log(`監聽到${target}物件的${key}屬性被設置了`)
    target[key] = newValue
  }
})

objProxy.name = 'Renny'

console.log(obj)