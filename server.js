var express = require('express');//引入express模块
var server = express();//创建express实例
var mysql = require('mysql'); //导入mysql模块

server.get('/', function(req, res){
    res.send('Hello,myServer'); //服务器响应请求
});
server.listen(3000,function(){   //监听3000端口
    console.log("Server running at 3000 port");
});
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'db_bossjob'
  });
   
  connection.connect();
   
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;  //throw 抛出错误
    console.log('The solution is: ', results[0].solution);
  });