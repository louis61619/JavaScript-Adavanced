
// 直接導入
// import { name } from './foo.js'
// console.log(name)

// 導入時設置別名
import { name as fooName } from './foo.js'
console.log(fooName)

// 統一導入
import * as foo from './foo.js'
console.log(foo.name)
