// 1. for ... of

// 2. 展開語法 spreed syntax
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

const newNames = [...iterableObj]
console.log(newNames)


// 物件展開語法並非迭代器，這是 ES9 新增的特性
const obj = {
  name: 'Louis'
}
const obj1 = { ...obj }


// 解構語法
const [ name1, name2 ] = newNames
// const { name } = obj 這是 ES9 新增的特性


// Promise.all
Promise.all(iterableObj).then(res => {
  console.log(res)
})