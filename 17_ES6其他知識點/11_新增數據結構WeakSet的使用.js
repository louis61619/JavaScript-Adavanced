const weakSet = new WeakSet()

// 區別一： 只能存放物件類型
// Invalid value used in weak set
// weakSet.add(10)


// 區別二： 對物件是一個弱引用
// 意思是引用該物件
let obj = {
  name: "Louis"
}

const set = new WeakSet()
set.add(obj)

obj = null

console.log(set)


// WeakSet 的應用場景
// 不用 Set 的原因是如果銷毀實例， WeakSet 中存在的物件會跟著銷毀
const personSet = new WeakSet()

class Person {
  constructor() {
    personSet.add(this)
  }
  running() {
    if (!personSet.has(this)) {
      throw new Error('is not correct this!')
    }
    console.log("running~", this)
  }
}

const p = new Person()

p.running.call({name: 'Louis'})