function add(x, y, z) {
  x = 0 + x
  y = y * 2
  z = z * z

  return x + y + z
}

// function add1(x) {
//   x = x + 2

//   return function(y) {
//     y = y * 2

//     return function(z) {
//       z =  z * z

//       return x + y + z
//     }
//   }

// }


function add(x) {
  x = 0 + x 
  return function(y) {
    y = y * 2
    return function(z) {
      z =  z * z
      return x + y + z
    }
  }
}

// const result = add(2)(3)(4)

// console.log(result)

const foo = add(2) 
const baz = foo(3)

console.log(baz(4))

const bar = foo(4)

// 5*5=25 x+y+z=35
console.log(bar(5))