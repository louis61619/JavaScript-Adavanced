// setItem
localStorage.setItem('name', 'Louis')



// key 方法
console.log(localStorage.key(0))

// 獲取
console.log(localStorage.getItem('name'))


// length
for(let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i)
  console.log(localStorage.getItem(key))
}

// 刪除
localStorage.removeItem('name')

// clear
localStorage.clear()