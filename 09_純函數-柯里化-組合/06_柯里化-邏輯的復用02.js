// function log(date, type, message) {
//   console.log(`[${date.getHours()}:${date.getMinutes()}][${type}][${message}]`)
// }

var log = date => type => message => {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}][${message}]`)
}

var nowLog = log(new Date())

nowLog("DEBUG")("查找到輪播圖錯誤")
nowLog("FEATURE")("用戶添加了新功能")


var nowAndDebugLog = nowLog("DEBUG")
nowAndDebugLog("查找到使用者頁面出現錯誤")