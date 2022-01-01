
// 1. 創建 Set 結構

// const set = new Set()

// set.add(10)
// set.add(20)

// set.add(10)

// // 內存地址不同可以添加
// set.add({})
// set.add({})

// // 內存地址相同無法重複添加
// const obj = {}
// set.add(obj)
// set.add(obj)

// console.log(set)

// 為陣列去重
const arr = [33, 30, 33, 40, 30, 444, 5050]

// 手寫
// const newArr = []
// for(const item of arr) {
//   if(newArr.indexOf(item) === -1) {
//     newArr.push(item)
//   }
// }

// console.log(newArr)

const arrSet = new Set(arr)
// console.log(Array.from(arrSet))
console.log([...arrSet])


// size 屬性
console.log(arrSet.size)


// add 方法
arrSet.add(100)


// delete 方法
arrSet.delete(100)

// has 方法
arrSet.has(100)

// clear 方法
arrSet.clear()


// forEach 進行遍歷
arrSet.forEach(item => {

})

for(let item of arrSet) {
  
}