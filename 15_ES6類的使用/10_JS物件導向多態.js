function calcArea(shape) {
  console.log(shape.getArea())
}

var obj1 = {
  name: 'Louis',
  getArea: function() {
    return 1000
  }
}

class Person {
  getArea() {
    return 100
  }
}

var p = new Person()

calcArea(obj1)
calcArea(p)

function sum(m, n) {
  return m + n
}

sum(20, 30)
sum("abc", "vdd")