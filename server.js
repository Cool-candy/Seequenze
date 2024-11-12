var http=require('http');
var dt=require('./demomodule');
var fs=require('fs')

http.createServer(function mmain(req,res){
fs.readFile('attempt.html',function(err,data){
res.writeHead(200,{'Content-Type':'text/html'});
res.write("The date & time are currently:" + dt.myDateTime());
res.write(data);
return res.end('<h1 style="color:red;">!!!!&#2471;&#2497;&#2468;&#2509;&#2468;&#2507;&#2480;&#2495;!!!!</h1>');
});
}).listen(8080);
