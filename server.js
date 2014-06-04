var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

var DIRLINEAS = __dirname + '/public/lineas';

// = Setup 1

app.use(bodyParser());

// = Handlers

app.get('/lineas', function (req, res) {
	var lineas = fs.readdirSync(DIRLINEAS)
		.map(function (s) { return Number(s.split('.')[0]); })
		.sort(function (a, b) { return a - b; });
	
	res.send(lineas);
});

app.get('/lineas/:id', function (req, res) {
	res.send(JSON.parse(fs.readFileSync(DIRLINEAS + '/' + req.params.id + '.json')));
});

// = Setup 2

app.use(express.static(__dirname + '/public'));

// = GO!

app.listen(8080, function () {
	console.log('Escuchando...');
});

