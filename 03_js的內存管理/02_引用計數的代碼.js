var obj = { name: 'Renny' }

var info = {name: "jifjdis", friend: obj}

var infos = {name: "jifjdis", friend: obj}

// 在物件中有一塊專門的空間負責計算被其他物件引用的次數 retain count
// 當 retain count 為零時會回收掉這塊物件的內存

// 存在很大的弊端叫做循環引用
var obj1 = { friend: obj2 }
var obj2 = { friend: obj1 }

// 還有一種算法是標記清除 是從根路徑開查找
// js主要是採用這種