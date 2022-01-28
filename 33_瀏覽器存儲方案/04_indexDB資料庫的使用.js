const dbRequest = indexedDB.open('Louis')
dbRequest.onerror = function(err) {
  console.log('open indexDB error')
}

let db = null
dbRequest.onsuccess = function(event) {
  console.log(event.target.result)
  db = event.target.result
}

// 第一次打開/發生版本更新時
dbRequest.onupgradeneeded = function(event) {
  const db = event.target.result
  // 創建一些儲存物件
  db.createObjectStore('users', { keyPath: 'id' })
}

const btns = document.querySelectorAll('button')
for(let i = 0; i < btns.length; i++) {
  

  btns[i].onclick = function() {
    // 事務物件 傳入儲存物件名稱、模式
    const transaction = db.transaction('users', 'readwrite')
    const store = transaction.objectStore('users')

    switch (i) {
      case 0:
        console.log('新增')
        const request = store.add({
          id: 111,
          name: 'Louis',
          age: 26
        })
        request.onsuccess = function() {
          console.log('插入成功')
        }
        // 全部操作完成回調
        transaction.onComplete = function() {
          console.log('操作完成')
        }
        break;
      case 1:
          console.log('查詢')
          // 查詢方式一：根據主鍵查詢
          // const request1 = store.get(1643037454366)
          // request1.onsuccess = function(event) {
          //   console.log(event.target.result)
          // }

          // 查詢方式二：全體查詢
          const request2 = store.openCursor()
          request2.onsuccess = function(event) {
            const cursor = event.target.result
            if (cursor) {
              // console.log(cursor.key, cursor.value)
              // cursor.continue()
              if (cursor.key === 111) {
                console.log(cursor.key, cursor.value)
              } else {
                cursor.continue()
              }
            } else {
              console.log('查詢完成')
            }
          }
        break;
      case 2: 
        const request4 = store.openCursor()
        request4.onsuccess = function(event) {
          const cursor = event.target.result
          if (cursor) {
            if (cursor.key === 111) {
              cursor.delete();
            } else {
              cursor.continue()
            }
          }
        }
        console.log('刪除')
        break;
      case 3:
        console.log('修改')
        const request3 = store.openCursor()
        request3.onsuccess = function(event) {
          const cursor = event.target.result
          if (cursor) {
            if (cursor.key === 111) {
              const value = cursor.value
              value.name = "Renny"
              cursor.update(value);
            } else {
              cursor.continue()
            }
          }
        }
        break;
    
      default:
        break;
    }
  }
}

