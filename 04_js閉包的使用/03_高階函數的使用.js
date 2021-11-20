var nums = [10, 5, 11, 100, 55]

// var newNums = []
// for(let i=0; i < nums.length; i++) {
//   var num = nums[i]
//   if (num%2 === 0) {
//     newNums.push(num)
//   }
  
// }

// console.log(newNums)

// method: 通常來說是屬於某個物件的函數

// 篩選
// const newNums = nums.filter(function (num, index, arr) {
//   return num% 2 === 0
// })

// 映射
// const newNums = nums.map(function(item) {
//   return item * 10
// })

// find/findIndex/forEach 查找/查找index/迭代

// 累加
const total = nums.reduce(function(preValue, item) {
  return preValue + item
}, 0 )// initial

console.log(total)