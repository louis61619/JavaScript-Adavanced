
//

function foo(num1, num2) {
  return num1 * 1 + num2 *3
}

var a = 'abc'
function bar(num1, num2) {
  a = 'bca'
  return num1 * 1 + num2 *3
}


function baz(info) {
  info.age = 100
}

var obj = { name: 'Louis', age: 19 }
baz(obj)

// function baz(info) {
//   return {
//     ...info,
//     age: 100
//   }
// }

// React組件中無法做到直接修改props
function HelloWorld(props) {
  props.info = {}
}