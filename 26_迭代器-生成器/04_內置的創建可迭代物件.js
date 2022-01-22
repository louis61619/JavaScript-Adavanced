const names = ["abc", "cvn", "aaa"]
console.log(names[Symbol.iterator])

const iterator = names[Symbol.iterator]()

console.log(iterator.next())

console.log(iterator.next())

console.log(iterator.next())

console.log(iterator.next())


const set = new Set()
set.add(10)
set.add(100)
set.add(1000)

const iterator1 = set[Symbol.iterator]()

console.log(iterator1.next())

console.log(iterator1.next())

console.log(iterator1.next())

console.log(iterator1.next())


function bar(x, y, z) {
  for(const arg of arguments) {
    console.log(arg, '--')
  }
}

bar(10, 20, 40)