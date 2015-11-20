var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Kaixo');
});

// http://localhost:3000/hello.txt?q=xxxxxx
app.get('/hello.txt', function(req, res) {

	var q = req.query.q;
	console.log(q);

    res.send('Hello World: ' + q);
});

app.get('/hola.txt', function(req, res) {
	console.log("he ejecutado /hola.txt");
    res.send('Hola Mundo!');
});

app.get('/kaixo.txt', function(req, res) {
    res.send('Kaixo Mundua');
});

//app.listen(port, [hostname], [backlog], [callback])
// http://expressjs.com/4x/api.html

var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000;
var ip = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || "0.0.0.0";

var server = app.listen(port, ip, function(){
    console.log('Listening in port %d', server.address().port);
});