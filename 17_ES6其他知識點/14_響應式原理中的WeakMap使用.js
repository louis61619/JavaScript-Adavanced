const obj = {
  name: 'Louis'
}

function objNameFn() {
  console.log('obj name is change')
}

const weakMap = new WeakMap()

const objMap = new Map()

objMap.set('name', [objNameFn])
weakMap.set(obj, objMap)

// 當目標物件發生改變，Vue3 會透過 proxy 監聽獲取對應的物件和屬性
const targetMap = weakMap.get(obj)
const fns = targetMap.get('name')

fns.forEach(item => {
  item()
})