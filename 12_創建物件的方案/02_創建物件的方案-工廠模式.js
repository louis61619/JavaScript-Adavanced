function createPerson(name, age, height, address) {
  var p = {
    name,
    age,
    height,
    address,
    eating: function() {
      console.log(this.name + '在吃東西')
    },
    running: function() {
      console.log(this.name + '在跑步')
    }
  }
  return p
}
var p1 = createPerson('張三', 18, 1.88, '台北')
var p2 = createPerson('李四', 18, 1.88, '新竹')
var p3 = createPerson('王五', 18, 1.88, '桃園')

console.log(p1, p2, p3)