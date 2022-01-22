// 情況一： 核心模塊
const path = require('path')
path.resolve()

// 情況二：路徑
require('./foo')
const aaa = require('./aaa')
console.log(aaa.name)