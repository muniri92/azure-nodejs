var express = require('express');
var fs = require('fs');
var app = express();
var port = 3000;
var path = '/Users';
var foo = `
      <html>
        <head>
          <title> File Directories </title>
        </head>
        <body>
          <h1> File Directory </h1>
          <ul>
`
var baz = `
         </ul>
       <body>
     </html>
`


app.get('/files', function(req, res) {
  var lst = [];
  fs.readdir(path, function(err, items) {
    for (var i = 0; i < items.length; i++) {
      if (fs.lstatSync(path + '/' +  items[i]).isDirectory()) {
        lst.push( '<a href=/files'+ path + '/' +  items[i] + '><li>' + items[i] + '</li></a>');
      } else {
        lst.push( '<li>' + items[i] + '</li>');
      };
      lst.join('');
    };
    res.send(([foo, lst.join(''), baz]).join(''));
  });
});


app.get('/files/*', function(req, res) {
  var lst = [];
  var url = req.url;
  url = url.substring(6);
  path = url;
  fs.readdir(path, function(err, items) {
    console.log(items)
    for (var i = 0; i < items.length; i++) {
      if (fs.lstatSync(path + '/' +  items[i]).isDirectory()) {
        lst.push( '<a href=/files'+ path + '/' +  items[i] + '><li>' + items[i] + '</li></a>');
      } else {
        lst.push( '<li>' + items[i] + '</li>');
      };
      lst.join('');
    };
    res.send(([foo, lst.join(''), baz]).join(''));
  });
});


app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
