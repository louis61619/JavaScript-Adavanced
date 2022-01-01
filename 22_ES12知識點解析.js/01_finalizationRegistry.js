const finalRegistry = new FinalizationRegistry((value) => {
  console.log('object is destroy', value)
})

let obj = { name: 'Louis' }

// 第一個參數為監測的物件，第二個參數做為 value 傳入 callback 中
finalRegistry.register(obj, 'obj')

obj = null