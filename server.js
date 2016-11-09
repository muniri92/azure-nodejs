var express = require('express');
var app = express();
var port = 3000;


app.get('*', function(request, response) {
  console.log('New request', request.url);
  response.sendFile('index.html', {root: '.'});
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});

