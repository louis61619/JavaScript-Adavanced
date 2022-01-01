

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this._address = '新北市'
  }

  // 普通的實例方法
  eating() {
    console.log(this.name + '在吃東西')
  }

  // 訪問器方法
  get address() {
    return this._address
  }

  set address(newValue) {
    this._address = newValue
  }

  // 靜態方法(類方法)
  static createPerson() {
    var names = ['vbc', 'aa', 'aff']
    var nameIndex = Math.floor(Math.random() * names.length)
    var name = names[nameIndex]
    var age = Math.floor(Math.random() * 100)
    return new Person(name, age)
  }
}

// var p = new Person("Renny", 29)

// console.log(p.address)
// p.address = '台北市'


var p = Person.createPerson()

console.log(p)
