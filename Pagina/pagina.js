var express = require('express');
var app = express();
app.use(express.static("Public"));
app.get("/", function(req,res){
	res.send("Hola Cristian (Y)");
});
app.listen(3001);