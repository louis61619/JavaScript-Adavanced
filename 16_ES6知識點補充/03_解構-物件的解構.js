var obj = {
  name: 'Louis',
  age: 26,
  height: 1.75
}

var { name, age, height } = obj

var { name: newName } = obj


var { address = '新北市' } = obj