var name = 'window'

function Person(name) {
  this.name = name
  this.obj = {
    name:  'obj',
    foo1: function() {
      return function() {
        console.log(this.name)
      }
    },
    foo2: function() {
      return () => {
        console.log(this.name)
      }
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() // window 獨立調用
person1.obj.foo1.call(person2)() // window
person1.obj.foo1().call(person2) // person2 返回函數綁定person2

person1.obj.foo2()() // obj 剪頭函數會向外找 外層是被obj隱式綁定
person1.obj.foo2.call(person2)() // person2 同上 不過外層函數被綁定this為person2
person1.obj.foo2().call(person2) // obj 箭頭函數不被call影響

