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


// 封裝一個響應式函數
let activeReactiveFn = null
function watchFn(fn) {
  // 默認執行一次用以收集依賴
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}


const obj = {
  name: 'Louis'
}
// 創建代理物件
const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    // 依賴收集，根據 target、key 獲取 depend
    const depend = getDepend(target, key)
    depend.addDepend(activeReactiveFn)
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    const depend = getDepend(target, key)
    // 通知依賴更新
    depend.notify()
  }
})


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

  return depend
}

watchFn(function() {
  console.log('name屬性被改變為:', objProxy.name)
})

objProxy.name = 'Renny'

