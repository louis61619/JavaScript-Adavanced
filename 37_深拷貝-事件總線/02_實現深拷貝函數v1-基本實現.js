function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === 'object' || valueType === 'function')
}

function deepClone(originValue) {
  // 判斷傳入的 originValue 是否是一個物件類型
  if(!isObject(originValue)) {
    return originValue
  }
  const newObj = {}
  for(const key in originValue) {
    // 遞歸調用
    newObj[key] = deepClone(originValue[key])
  }
  return newObj
}


const obj = {
  name: 'Louis',
  age: 26,
  friends: {
    name: 'Renny',
    age: 25
  }
}

const newObj = deepClone(obj)



obj.friends.name = '111'
console.log(newObj)

