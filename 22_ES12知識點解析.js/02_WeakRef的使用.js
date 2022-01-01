const finalRegistry = new FinalizationRegistry((value) => {
  console.log('object is destroy', value)
})

let obj = { name: 'Louis' }
let info = new WeakRef(obj)

// 第一個參數為監測的物件，第二個參數做為 value 傳入 callback 中
finalRegistry.register(obj, 'obj')

obj = null


// 之後 GC 就會對 obj 本身引用的物件進行回收
setTimeout(() => {
  console.log(info.deref())
}, 10000)