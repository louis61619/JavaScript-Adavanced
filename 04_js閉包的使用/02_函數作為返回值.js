// js允許函數作為返回值
// function foo() {
//   function bar() {
//     console.log('888')
//   }
//   return bar
// }

// var fn = foo()

// fn()

function makeAdder(count) {
  function add(num) {
    return count + num
  }
  return add
}

const add10 = makeAdder(10)

console.log(add10(15))