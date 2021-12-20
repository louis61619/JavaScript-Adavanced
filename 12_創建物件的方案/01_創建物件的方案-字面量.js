var p1 = {
  name: '張三',
  age: 18,
  height: 1.88,
  address: "台北",
  eating: function() {
    console.log(this.name + '在吃東西')
  },
  running: function() {
    console.log(this.name + '在跑步')
  }
}