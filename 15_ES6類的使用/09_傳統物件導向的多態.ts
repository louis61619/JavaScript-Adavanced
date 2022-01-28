
// 傳統物件導向的語言
// 必須有繼承（多態的前提）
// 必須有重寫（子類重寫父類的方法）
// 必須要父類引用指向子類

class Shape {
  getArea() {}
}

class Rectangle extends Shape {
  getArea() {
    return 100
  }
}

class Circle extends Shape {
  getArea() {
    return 200
  }
}

var r = new Rectangle()
var c = new Circle()

// 多態： 當對不同數據類型執行同一個操作時，如果表現出來的形式不一樣就是多態的體現
function calcArea(shape: Shape) {
  console.log(shape.getArea())
}

calcArea(r)
calcArea(c)

export {}