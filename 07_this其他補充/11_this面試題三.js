var name = 'window'

function Person(name) {
  this.name = name
  this.foo1 = function() {
    console.log(this.name)
  }
  this.foo2 = () => console.log(this.name)
  this.foo3 = function() {
    return function() {
      console.log(this.name)
    }
  }
  this.foo4 = function() {
    return () => {
      console.log(this.name)
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1() // person1 隱式綁定
person1.foo1.call(person2) // person2 顯示綁定高於隱式綁定

person1.foo2() // person1 箭頭函數this往上層作用域找，上層是Person函數
person1.foo2.call(person2) // person1 箭頭函數不綁定this

person1.foo3()() // window 返回函數獨立調用
person1.foo3.call(person2)() // 同上
person1.foo3().call(person2) // person2 返回的獨立函數被綁定person2

person1.foo4()() // person1 箭頭函數往上層作用域找
person1.foo4.call(person2)() // person2 外層的函數被綁定了person2 箭頭函數就向上找到了person2
person1.foo4().call(person2) // person1  箭頭函數不被call作用