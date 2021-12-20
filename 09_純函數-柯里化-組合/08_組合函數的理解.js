
function double(num) {
  return num * 2
}

function square(num) {
  return num ** 2
}

console.log(square(double(10)))


function composeFn(m, n) {
  return function(count) {
    return n(m(count))
  }
}

const doubleAndSquare = composeFn(double, square)

console.log(doubleAndSquare(10))