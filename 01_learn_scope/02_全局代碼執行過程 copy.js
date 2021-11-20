var name = "louis";

console.log(string);

var string = "484646";

/**
 * 代碼被解析時，v8引擎會幫助我們創造一個物件(globalObjecy -> go)
 * 運行程式碼
 *    1.v8引擎為了執行程式碼，會運行一個執行上下文棧(函數調用棧)(Execution Context Stack, ECStack)
 *    2. 只有全局程式碼執行時 才會被創建(全局上下文)(Global Execution Context)
 */

var globalObject = {
  String: "類",
  data: "類",
  setTimeout: "函數",
  window: globalObject,
  name: undefined,
  string: undefined,
};
