const obj = {
  name: 'fifif'
}

const names = ["abc", "cba", "ndv", "fjd", NaN, obj]

if (names.indexOf(obj) !== -1) {
  console.log("包含該元素")
}

if (names.includes(obj, 0)) {
  console.log("包含該元素")
}

console.log(names.indexOf(obj))