
// import name from './foo.js'
// import { default as fooName } from './foo.js'

// console.log(name, fooName)

import('./foo.js').then(res => {
  console.log(res.default)
})

console.log('------')

console.log(import.meta)