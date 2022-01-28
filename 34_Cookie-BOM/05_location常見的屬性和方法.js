console.log(location)

// - hash：哈希
// - host：主機地址＋端口好
// - hostname：主機地址
// - href：完整的 url 地址
// - origin：源
// - pathname：路徑
// - port：端口號
// - protocol：協議
// - search：查詢參數

// 幾個方法

// 跳轉頁面
// location.assign("https://www.google.com")

// 跳轉頁面，不留下當前頁面的紀錄
// location.replace("https://www.google.com")

// 重新加載頁面
// location.reload()