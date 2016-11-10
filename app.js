console.log('fuckkkk');
var fs = require('fs');

var path = '/home/munir';

fs.readdir(path, function(err, items) {
    console.log(items);
    for (var i=0; i<items.length; i++) {
      var node = document.createElement('h4');

      node.textContent = items[i]

       document.getElementById('home').appendChild(node)    
      //items[i] = document.getElementById('home').textContent();  
      
      console.log(items[i]);
    }
});
