function createArrayIterator(arr) {
  let index = 0
  return {
    next() {
      if(index < arr.length) {
        return { done: false, value: arr[index++] }
      } else {
        return { done: true, value: undefined }
      }
    }
  }
}

const names = ['abc', 'dcd', 'jdjd']

const namesIterator = createArrayIterator(names)

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())