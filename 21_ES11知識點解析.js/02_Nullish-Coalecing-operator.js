// 空值合併運算 ??

const foo = false

// 邏輯或會將 0 、 false 和 空字串同樣視為 undefined
const baz = foo || 'default Value'

const bar = foo ?? 'default Value'

console.log(baz, bar)