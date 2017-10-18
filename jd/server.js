var http=require("http")
var fs=require("fs")
http.createServer(function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*")
	res.writeHead(200,{"content-type":"text/plain;charset=utf-8"});
	fs.readFile("data.json",function(err,data){
		if(err){
			return console.log(err)
		}else{
			res.end(data)
		}
	})
}).listen(8787)