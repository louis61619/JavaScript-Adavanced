// 創建一個物件， 對某一個東西進行抽象 (描述)

// 1. 透過new關鍵字
var obj = new Object()

obj.name = "Louis"
obj.age = 19
obj.height = 1.75
obj.running = function() {
  console.log(this.name + '在跑步')
}

// 2. 透過字面量的形式
var obj = {
  name: 'Louis',
  age: 19
}