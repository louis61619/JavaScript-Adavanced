const obj = {
  name: 'Louis'
}

// 響應式函數
const reacitveFns = []
function watchFn(fn) {
  reacitve.push(fn)
}


watchFn(function isChange() {

})

obj.name = 'Renny'
reacitveFns.forEach(fn => {
  fn()
})