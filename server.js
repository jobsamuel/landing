
// Public modules from npm.

var logfmt 	= require("logfmt");
var express = require('express');
var server 	= express();

server.use(logfmt.requestLogger());

// logfmt is key value logging convention adopted by Heroku.
// The library is for both converting lines in logfmt format to objects
// and for logging objects to a stream in logfmt format.

server.set('port', process.env.PORT || 8080);

// In many environments (e.g. Heroku), and as a convention, 
// you can set the environment variable PORT to tell your web server what port to listen on.
// So, 'process.env.PORT || 8080' means: whatever is in the environment variable PORT, 
// or 8080 if there's nothing there. 

server.use(express.static(__dirname + '/src'));

server.listen(server.set('port'));

console.log('Server running at http://127.0.0.1:8080/'); // Log valid in development environment only.


