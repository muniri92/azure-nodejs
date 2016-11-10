var express = require('express');
var fs = require('fs');

var app = express();
var port = 3000;
var path = '/home/munir'


app.get('/', function(req, res) {
  var foo = `
          <html> \
            <head> \
              <title> File Directories </title> \
            </head> \
            <body> \
              <h1> File Directory </h1> \
              <ul>
  `
  var baz = `
	      </ul> \
	    <body> \
	  </html> 
  `
 
  var lst = [];
  fs.readdir(path, function(err, items) {
    for (var i = 0; i < items.length; i++) {
      lst.push( '<a href=/' + items[i] + '><li>' + items[i] + '</li></a>');
      lst.join().replace(',', '');
    };
    res.send(([foo, lst.join(), baz]).join().replace(/\, /g,"")) 
  });
});


app.get('/app.js', function(req,res) {
  res.sendFile('app.js', {root: '.'});
});


app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});

