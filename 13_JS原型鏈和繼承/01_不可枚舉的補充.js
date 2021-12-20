var obj = {
  name: 'Louis'
}

Object.defineProperty(obj, "address", {
  value: '北京市'
})

// 瀏覽器會將不可枚舉的屬性以淺色展示
console.log(obj)