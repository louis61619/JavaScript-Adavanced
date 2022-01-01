var foo = 'foo'

let bar = 'bar'

// constant 簡寫 叫做常量 / 衡量
// const name = 'abc'

// const 本質上是傳遞的值不可修改
// 但是如果傳遞的是一個引用類型 ( 內存地址 )

const obj = {
  foo: 'foo'
}
obj.foo = 'bar'

var name = 'aaaa'
var name = 'bbbb'