var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req,res) {
  res.render('form');
});

app.post('/day-update', function(req, res) {
  let responses = req.body;
  res.render('day-update', responses);
});

app.listen(3000, function() {
  console.log('listening on 3000');
});

//learnings:
//1) when abbreviated request and response to req and res, respectively,
//ensure that you use short form later on in the block

//2) the routes should be preceded by a '/'

//3) with forms, require bodyParser and make sure to also use it!

//4) when coding on the server side, set the view engine to ejs (or something similar)
