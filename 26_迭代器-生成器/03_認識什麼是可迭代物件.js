const iterableObj = {
  names: ['abc', 'cba', 'bba'],
  [Symbol.iterator]: function() {
    let index = 0
    return {
      next: () => {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}

const iterator = iterableObj[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// 新的迭代器
const iterator1 = iterableObj[Symbol.iterator]()


// for...of 可以遍歷一個可迭代物件

for(const item of iterableObj) {
  console.log(item)
}