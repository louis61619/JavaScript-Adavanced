class Depend {
  constructor() {
    this.reacitveFns = []
  }

  addDepend(reacitveFn) {
    this.reacitveFns.push(reacitveFn)
  }

  notify() {
    this.reacitveFns.forEach(fn => {
      fn()
    })
  }
}


const obj = {
  name: 'Louis'
}

// 創建代理物件
const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    // 依賴收集
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    // 更新依賴
    const depend = getDepend(target, key)
    depend.notify()
  }
})

// 響應式函數
const depend = new Depend()
function watchFn(fn) {
  depend.addDepend(fn)
}

// 封裝一個獲取依賴的函數
const targetMap = new WeakMap()
function getDepend(target, key) {
  // 根據 target 獲取 map
  let map = targetMap.get(target)
  if(!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  // 根據 key 獲取 depend 物件
  let depend = map.get(key)
  if(!depend) {
    depend = new Depend()
    map.set(key, depend)
  }
}

watchFn(function() {
  console.log('屬性被改變')
})

objProxy.name = 'Renny'

