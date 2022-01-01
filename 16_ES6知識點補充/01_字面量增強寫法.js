var name = 'Louis'
var age = 26

var key = name + age


var obj = {
  // property shorthand(屬性簡寫)
  name,
  age,

  // method shorthand(方法簡寫)
  bar: function() {

  },
  foo() {

  },
  // 和箭頭函數不同
  baz: () => {
    console.log(this)
  },

  // computed property name(計算屬性名)
  [key]: 20
}

// 不綁定this this指向外層(全局)
obj.baz()

console.log(obj)