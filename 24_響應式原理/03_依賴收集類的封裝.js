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

// 響應式函數
const depend = new Depend()
function watchFn(fn) {
  depend.addDepend(fn)
}

watchFn(function() {

})

obj.name = 'Renny'

depend.notify()