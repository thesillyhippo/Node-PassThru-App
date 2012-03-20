var url = require('url')
var request = require('request')
var app = require('express').createServer()

app.get('*', function(req, res) {
	var path = req.params[0];
	console.log(typeof path);
	if (typeof path === "string") {
		path = path.slice(1);
	} else {
		path = path.slice(1);
	}
	
	if (path.substring(0,3) !== "http") {
		path = "http://" + path;
	}
	
	var uri = url.parse(path);
	
	request(path, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    res.send(body);
	  }
	})
	
});

app.listen(3000)