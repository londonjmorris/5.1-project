const loremIpsum = require('lorem-ipsum');

const express = require('express');

const app = express();

app.get('/lorem', function(req, res){
  res.send(output = loremIpsum({
    count:3, units:'paragraphs'
  }));
});


app.listen(3000, function() {
  console.log("Express app listening for connections");
});
