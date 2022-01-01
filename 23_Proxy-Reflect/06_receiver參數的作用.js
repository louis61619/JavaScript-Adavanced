const obj = {
  _name: 'Louis',
  get name() {
    // 需要讓 this 變成 proxy 物件才能攔截
    return this._name
  },
  set name(newValue) {
    this._name = newValue
  }
}

const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    // receiver 是創建出來的代理物件
    // Reflect.get 的第三個參數可以改變 getter 和 setter 的 this 指向
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
  }
})

console.log(objProxy.name)