var obj = { name: "why" }

// 原型鏈是找到哪一層停止查找的呢
// 字面物件obj的原型是 [Object: null prototype] {}
// [Object: null prototype] {} 就是頂層的原型

// [Object: null prototype]
console.log(obj.__proto__)

// null
console.log(obj.__proto__.__proto__)