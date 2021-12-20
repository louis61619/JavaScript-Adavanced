var obj = {
  // js沒有嚴格意義的私有屬性
  _age: 19,
  // get age() {
  //   return this._age
  // },
  // set age(value) {
  //   this._age = value
  // }
}

Object.defineProperties(obj, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "Louis"
  },
  age: {
    configurable: false,
    enumerable: false,
    get: function(){
      return this._age
    },
    set: function(value) {
      this._age = value
    }
  }
})

// 獲取某一個特定屬性的描述器
console.log(Object.getOwnPropertyDescriptor(obj, "name"))

console.log(Object.getOwnPropertyDescriptors(obj))