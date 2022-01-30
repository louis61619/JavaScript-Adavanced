function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === 'object' || valueType === 'function')
}

function deepClone(originValue, map = new WeakMap()) {
  // map/set 簡單處理
  if (originValue instanceof Set) {
    return new Set([...originValue])
  }
  if (originValue instanceof Map) {
    return new Map([...originValue])
  }

  // 判斷如果值為 Symbaol，創建一個新的 Symbol
  if (typeof originValue === 'symbol') {
    return Symbol(originValue.description)
  }

  // 判斷如果是函數類型直接複用
  if (typeof originValue === 'function') {
    return originValue
  }

  // 判斷傳入的 originValue 是否是一個物件類型
  if(!isObject(originValue)) {
    return originValue
  }

  // 判斷如果是循環引用直接返回新物件
  if(map.has(originValue)) {
    return map.get(originValue)
  }
  
  // 判斷是陣列或是物件
  const newObj = Array.isArray(originValue) ? [] : {}
  // 保存原物件作為 key
  map.set(originValue, newObj)
  for(const key in originValue) {
    // console.log(key)
    // 遞歸調用
    newObj[key] = deepClone(originValue[key], map)
  }

  // 對 Symbol 的 key 進行處理
  const symbolKeys = Object.getOwnPropertySymbols(originValue)
  for(const sKey of symbolKeys) {
    // 沒必要創建一個新的 key
    newObj[sKey] = deepClone(originValue[sKey], map)
  }

  return newObj
}

const s1 = Symbol('aaa')
const s2 = Symbol('bbb')

const obj = {
  name: 'Louis',
  age: 26,
  friends: {
    name: 'Renny',
    age: 25,
    hobbies: ['baseball', 'board game']
  },
  hobbies: ['basketball'],
  [s1]: 'aaa',
  s2: s2,
  // Set/Map
  set: new Set(['aaa', 'bbb', 'ccc']),
  map: new Map([['aaa', 'abc'], ['bbb', 'bcd']]),
}

obj.info = obj

const newObj = deepClone(obj)



obj.friends.name = '111'
console.log(newObj)

