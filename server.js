var http = require("http"),
	fs = require("fs"),
	url= require("url"),
	file,temp,type;

http.createServer(function(req,res){
	temp = url.parse(req.url,true);
	console.log(temp);
	req.url = req.url.split("/");
	try{
		if(temp.pathname !== "/"){
			file=fs.readFileSync(temp.pathname.slice(1));
			type=temp.pathname.split(".")[1];
		}
		else{
			file=fs.readFileSync("index.html");
			type="html"
		}	
		res.writeHead(200,{'Content-Type':'text/'+type});
		res.end(file);
	}
	catch(e){
		console.log(e.message);
	}
}).listen(8000);
console.log("server running at http://localhost:8000")
