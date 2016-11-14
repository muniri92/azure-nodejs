var express = require('express');
var fs = require('fs');

var app = express();
var port = 3000;
var path = '/Users'
var mainlst = []

app.get('/files', function(req, res) {
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
        <script src="app.js"></script> \
	    <body> \
	  </html>
  `

  var lst = [];
  fs.readdir(path, function(err, items) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].indexOf('.') === -1) {
        mainlst.push(items[i]);
        lst.push( '<a href=/files'+ path + '/' +  items[i] + '><li>' + items[i] + '</li></a>');
        // console.log(items[i]);
        // createAppGet(items[i]);
      } else {
        lst.push( '<li>' + items[i] + '</li>');
      }
      lst.join('');
    };
    
    res.send(([foo, lst.join(), baz]).join(''));
  });
});



app.get('/files/*', function(req, res) {
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
  var lst = [];
  var s = req.url 
  console.log('s: ', s);
  // var n = s.indexOf('/files/');
  // console.log(s.split('/files/')[0])
  s = s.substring(6);
  console.log('s: ', s);
  path = s;
  console.log('path: ', path)
  fs.readdir(path, function(err, items) {
    console.log('ITEMS: ', items)
    for (var i = 0; i < items.length; i++) {
      if (items[i].indexOf('.') === -1) {
        mainlst.push(items[i]);
        lst.push( '<a href=/files' + path + '/' + items[i] + '><li>' + items[i] + '</li></a>');
        // console.log(items[i]);
        // createAppGet(items[i]);
      } else {
        lst.push( '<li>' + items[i] + '</li>');
      }
      lst.join('');
    };
    // path = path + '/' + newPath;
    res.send(([foo, lst.join(), baz]).join(''))
  });
});



// function createAppGet(newPath) {
//   app.get('/' + newPath, function(req, res) {
//     var foo = `
//             <html>
//               <head>
//                 <title> File Directories </title>
//               </head>
//               <body>
//                 <h1> File Directory </h1>
//                 <ul>
//     `
//     var baz = `
//   	      </ul>
//   	    <body>
//   	  </html>
//     `
//     var lst = [];
//     fs.readdir((path + '/' + newPath), function(err, items) {
//       for (var i = 0; i < items.length; i++) {
//         if (items[i].indexOf('.') === -1) {
//           mainlst.push(items[i]);
//           lst.push( '<a href=/' + items[i] + '><li>' + items[i] + '</li></a>');
//           console.log(items[i]);
//           createAppGet(items[i]);
//         } else {
//           lst.push( '<li>' + items[i] + '</li>');
//         }
//         lst.join('');
//       };
//       path = path + '/' + newPath;
//       res.send(([foo, lst.join(), baz]).join(''))
//     });
//   });
// };



app.get('/app.js', function(req,res) {
  res.sendFile('app.js', {root: '.'});
});


app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
