var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

var DIRLINEAS = __dirname + '/public/infolineas';

var lineas = (function () {
	var result =
		fs.readdirSync(DIRLINEAS)
		.map(function (n) { return fs.readFileSync(DIRLINEAS + '/' + n); })
		.map(JSON.parse);
	
	return result;
})();

var lineas_str = JSON.stringify(lineas);

// = Setup

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

// = Handlers

app.get('/lineas', function (req, res) {
	res.send(lineas_str);
});

// = GO!

app.listen(8080, function () {
	console.log('Escuchando...');
});

