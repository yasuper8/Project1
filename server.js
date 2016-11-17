// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    controllers = require('./controllers');

// parse incoming urlencoded form data
// and populate the req.body object
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files from the `/public` directory:
app.use(express.static('public'));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

 /*
  * HTML Endpoints
  */

 app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */
pp.get('/api', controllers.api.index);

app.get('/api/userList', controllers.userList.displayAllUsers);
app.get('/api/userList/:id', controllers.userList.displayUser);

app.post('/api/userList', controllers.userList.create);


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
