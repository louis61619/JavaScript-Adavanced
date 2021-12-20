function add(x, y, z) {
  return x + y + z
}

var result = add(10, 20, 30)

function add1(x) {
  return function(y) {
    return function(z) {
      return x + y + z
    }
  }
}

var result1 = add1(10)(20)(30)

var add2 = x => y => z => {
  return x + y + z
}
// var add3 = x => {
//   return y => {
//     return z => {
//       return x + y + z
//     }
//   }
// }
var add3 = x => y => z => x + y + z


var result2 = add2(10)(20)(30)

console.log(result, result1, result2)