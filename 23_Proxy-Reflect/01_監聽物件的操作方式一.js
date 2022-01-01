const obj = {
  name: 'Louis',
  age: 26
}


// 監聽單一屬性
// 要創建一個第三方變數，避免發生無限循環調用
// let myName = obj['name']
// Object.defineProperty(obj, "name", {
//   get() {
//     console.log("監聽obj屬性被訪問了")
//     return myName
//   },
//   set(newValue) {
//     console.log("監聽obj屬性被修改了")
//     myName = newValue
//   }
// })

// console.log(obj.name)

// console.log(obj)


// 監聽多屬性
Object.keys(obj).forEach(key => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    get() {
      console.log('監聽obj屬性被訪問了')
      return value
    },
    set(newValue) {
      console.log('監聽obj屬性放修改了')
      value = newValue
    }
  })
})