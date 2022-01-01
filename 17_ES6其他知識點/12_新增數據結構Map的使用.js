const obj1 = {
  name: 'Renny'
}

const obj2 = {
  name: 'Louis'
}


// const info = {
//   [obj]: '123'
// }

// // 物件轉為字符串的形式
// // { '[object Object]': '123' }
// console.log(info)

// Map 允許使用物件類型作為 key
// 構造方法的使用
const map = new Map()
map.set(obj1, "aaa")
map.set(obj2, "bbb")


console.log(map)

const map2 = new Map([[obj1, "aaa"],[obj2, "bbb"]])

console.log(map2)

// map 常見的方法

// set
map2.set("dkdkd", 'dkdojd')

// get 
map2.get("dkdkd")

// has
map2.has("dkdkd")

// delete
map2.delete("dkdkd")

// clear
// map2.clear()

// 遍歷
map2.forEach((item, key) => {
  console.log(item, key)
})

for(const item of map2) {
  console.log(item)
}

for(const [key, value] of map2) {
  console.log(key, value)
}