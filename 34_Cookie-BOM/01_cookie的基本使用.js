


const express = require("express");

const app = express();


// 首頁，讀取cookie
app.get("/home", function (req, res) {
  const { name, age } = req.headers.cookie? req.headers.cookie.split(';').reduce((res, item) => {
    const data = item.trim().split('=');
    return { ...res, [data[0]]: data[1] };
  }, {}) : {};
  res.send(`Hello ${name}, you're age is ${age}`);
});

// 登入，註冊cookie
app.get("/login", function (req, res) {
  // 建立cookie，值為字串
  res.cookie("name", "Louis", { expires: new Date(Date.now() + 900000), httpOnly: false});
  res.cookie("age", "26", { expires: new Date(Date.now() + 900000), httpOnly: false});

  res.send("已註冊cookie");
});


// 退出，清除cookie
app.get("/exit", function (req, res) {
  res.clearCookie("name");
  res.clearCookie("age");
  res.send("已清除cookie");
});

app.listen(5000);