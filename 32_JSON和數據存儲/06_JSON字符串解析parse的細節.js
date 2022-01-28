const JSONString = '{"name":"Louis","age":27}'

const info = JSON.parse(JSONString, (key, value) => {
  if(key === 'age') {
    return value + 1
  }
  return value
})

console.log(info)