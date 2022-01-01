const obj = {
  name: 'Louis',
  age: 26
}

const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    return Reflect.set(target, key)
  },
  set: function(target, key, newValue) {
    const result = Reflect.set(target, key, newValue)
    if (result) {
      // ...設置成功
    } else {
      // ...設置失敗
    }
  }
})

objProxy.name = 'Renny'

console.log(obj.name)