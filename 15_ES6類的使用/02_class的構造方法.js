class Person {
  // 類的構造方法
  // 在記憶體中創建一個空物件 {}
  // 將類的原型 prototype 賦值給該物件的 __proto__
  // 將物件賦值給函數的 this
  // 返回物件
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name + '在吃東西')
  }
}

var p = new Person("Renny", 29)

p.eating()