// 情況一： 核心模塊
const path = require('path')
path.resolve()

// 情況二：路徑
require('./foo')
const aaa = require('./aaa')
console.log(aaa.name)


// 情況三：不是路徑也不是核心模塊，會從當前目錄一層層往上查找 node_modules 資料夾中有沒有對應的第三方庫
const axios = require('axios')