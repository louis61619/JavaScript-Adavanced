function Person(name, age) {
  this.name = name;
  this.age = age;
}

var p1 = new Person("why", 10);
console.log(p1.name, p1.age);

// 綁定規則衝突 new的優先級較高
var obj = {
  foo: function (name) {
    this.name = name;
  },
};

var a = new obj.foo("louis");

console.log(a.name);
