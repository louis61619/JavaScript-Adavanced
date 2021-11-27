var obj1 = {
  name: "obj1",
  foo: function () {
    console.log(this);
  },
};

var obj2 = {
  name: "obj2",
};

obj2.bar = obj1.foo;

obj2.bar();

// 在小括號前面最好加上分號 不然會造成辭法分析的錯誤
(obj2.bar = obj1.foo)();
