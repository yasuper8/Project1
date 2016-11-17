// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    controllers = require('./controllers');

// parse incoming urlencoded form data
// and populate the req.body object
app.use(bodyParser.urlencoded({ extended: true }));

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

// Serve static files from the `/public` directory:
app.use(express.static('public'));

/*
* HTML Endpoints
*/

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */

app.get('/api', controllers.api.index);


// Display all users
app.get('/api/users', function(req, res) {
  db.User.find(function(err, users) {
    if (err) {
      return console.log('Get all users error: ' + err);
    }
    res.json(users);
  });
});

// Display a single user
app.get('/api/users/:id', function displayUser(req, res) {
  db.User.findOne({_id: req.params.id}, function(err, user) {
    res.json(user);
  });
});


// Create a new user
app.post('/api/users', function create(req, res) {
  console.log('body', req.body);
  db.User.create(req.body, function(err, newUser) {
    if (err) { console.log('error', err); }
    console.log(newUser);
    res.json(newUser);
  });
});


// app.get('/api/users', controllers.users.index);

// app.get('/api/users/:id', controllers.users.displayUser);

// app.post('/api/users', controllers.users.create);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
