
/**
 * callback 弊端：
 * 需要自己設計好requestData
 * 如果使用第三方庫，需要看文檔才能了解如何使用
 */

function requestData(params, successCallback, failtureCallback) {
  setTimeout(() => {
    if (params === 'google') {
      // 成功
      let data = ['fkfk', 'fkfk', 'fkfkf']
      successCallback(data)
      // return data
    } else {
      // 失敗
      let errMessage = '請求失敗'
      failtureCallback(errMessage)
      // return errMessage
    }
  })
}

requestData('google', (res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})