var name = "window"

var person = {
  name: "person",
  sayName: function() {
    console.log(this.name)
  }
}

function sayName() {
  var sss = person.sayName
  sss() // window 獨立調用
  person.sayName(); // person: 隱式調用
  (person.sayName)(); // person: 和上面一樣是隱式調用
  (b = person.sayName)(); // window b賦值為函數並獨立調用
}

sayName()
