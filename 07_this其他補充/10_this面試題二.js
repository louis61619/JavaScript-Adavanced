var name = 'window'

var person1 = {
  name: 'person1',
  foo1: function() {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function() {
    return function() {
      console.log(this.name)
    }
  },
  foo4: function() {
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }

person1.foo1() // person1 隱式綁定
person1.foo1.call(person2) // person2 顯示綁定優先級大於隱式綁定

person1.foo2() // window 箭頭函數不綁定this往外找到全局作用域，物件本身不產生作用域
person1.foo2.call(person2) // 同上

person1.foo3()() // window 獨立調用
person1.foo3.call(person2)() // 同上
person1.foo3().call(person2) // person2 顯示綁定

person1.foo4()() // person1 箭頭函數不綁定this所以會再生成返回的函數時往外層找this
person1.foo4.call(person2)() // person2 同上 不過是顯示綁定了this
person1.foo4().call(person2) // person1 因為返回箭頭函數不能夠被call綁定