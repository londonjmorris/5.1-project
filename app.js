const loremIpsum = require('lorem-ipsum');

const express = require('express');

const app = express();

var output = loremIpsum({
  count:3, units:'paragraphs'
});

app.get('/lorem', function(req, res){
  res.send(output);
});


app.listen(3000, function() {
  console.log("Express app listening for connections");
});
