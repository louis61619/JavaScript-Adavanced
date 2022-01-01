function requestData(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (params === 'google') {
        // 成功
        let data = ['fkfk', 'fkfk', 'fkfkf']
        resolve(data)
      } else {
        // 失敗
        let errMessage = '請求失敗'
        reject(errMessage)
      }
    }, 3000)
  })
}

const promise = requestData('')

promise.then(res => {
  console.log(res)
}, err => {
  console.log(err)
})