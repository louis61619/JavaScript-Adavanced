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
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    depend.notify()
  }
})

// 響應式函數
const depend = new Depend()
function watchFn(fn) {
  depend.addDepend(fn)
}

watchFn(function() {
  console.log('屬性被改變')
})

objProxy.name = 'Renny'

