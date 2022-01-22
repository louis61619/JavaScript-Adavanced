
// 編寫一個迭代器
// const iterator = {
//   next: function() {
//     return { done: true, value: 123 }
//   }
// }

const names = ['abc', 'dcd', 'jdjd']

// 創建一個迭代器來訪問 names
let index = 0
const namesIterator = {
  next: function() {
    if(index < names.length) {
      return { done: false, value: names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  }
}

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())