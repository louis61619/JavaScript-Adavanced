function foo(...args) {
  console.log(this, args)
}

const fooProxy = new Proxy(foo, {
  apply(target, thisArg, argArray) {
    console.log('apply 調用')
    return target.apply(thisArg, argArray)
  },
  construct: function(target, argArray, newTarget) {
    return new target(...argArray)
  }
})

// fooProxy.apply({ name: 'Louis' }, ['bbb', 'fjfjf'])


new foo("aas", "djd")