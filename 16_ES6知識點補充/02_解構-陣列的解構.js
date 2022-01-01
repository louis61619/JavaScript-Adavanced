var array = ['acb', 'bca', 'abc']

// var [item1, item2, item3] = array

// 可以只對後面的元素進行解構，只要在前面加上 `,` 
// var [, item2, item3] = array

// console.log(item2, item3)

// 解構出一個元素，後面的元素放入一個新陣列
var [item1, ...newArray] = array


// 解構的默認值
var [item1, item2, item3, item4 = 'aaa'] = array