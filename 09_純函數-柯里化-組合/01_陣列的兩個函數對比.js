var names = ["abc", "cba", "nba", "dna"]

// slice 原先的陣列是不會改變的
// 傳入起始的位置和要擷取幾個，不傳擷取幾個默認為剩下的全部
// var newNames = names.slice(0, 1)
// 可以寫成
// var newNames1 = Array.prototype.slice.call(names, 0)
// console.log(newNames)
// console.log(newNames1)

// splice
// 傳入起始的位置和要擷取幾個，不傳擷取幾個默認為剩下的全部
// splice 會對原始的陣列進行修改
var newNames2 = names.splice(2, 1, 'aaa')
console.log(newNames2)
console.log(names)