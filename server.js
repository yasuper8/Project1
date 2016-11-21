// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    controllers = require('./controllers'),
    session = require('express-session');

// MIDDLEWARE

// Serve static files from the `/public` directory:
app.use(express.static('public'));

// parse incoming urlencoded form data
// and populate the req.body object
app.use(bodyParser.urlencoded({
    extended: true
}));


//renders signup and signin pages
app.set('view engine', 'ejs');

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'SuperSecretCookie',
    cookie: {
        maxAge: 30 * 60 * 1000
    } // 30 minute cookie lifespan (in milliseconds)
}));


/************
 * DATABASE *
 ************/

var db = require('./models');
var User = require('./models/user');

/**********
 * ROUTES *
 **********/
//is this /users or /signup?
app.post('/signup', function(req, res) {
    console.log('request body: ', req.body);
    res.json("it worked!");
});

// Sign up route - creates a new user with a secure password
app.post('/users', function(req, res) {
    // use the email and password to authenticate here
    db.User.createSecure(req.body.email, req.body.password, req.body.name, req.body.nativeLang, req.body.learnLang, req.body.favoriteAnimal, req.body.profileUrl, req.body.friends, function(err, user) {
        res.json(user);
    });
});

//update user info
// app.put('/users/:id/edit', function (req,res) {
//   User.findById(req.id, function (err, user) {
//     if (err) console.log("hello world")
//     user.update({
//       learnLang: learnLang
//     })
//   })
// })


// update todo
app.put('/api/languages/:id', function (req, res) {
  // get user id from url params (`req.params`)
  var currentUserId = req.params.id;
  // find userId in db
  Todo.findOne({ _id: todoId }, function (err, foundUser) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      // update the todos's attributes
      foundUser.learnLang = req.body.learnLang;

      // save updated todo in db
      foundUser.save(function (err, savedUser) {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
          res.json(savedUser);
        }
      });
    }
  });
});
/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/signup', function(req, res) {
    res.render('signup');
});

// login route with placeholder response
app.get('/login', function(req, res) {
    res.render('login');
});


//a post sessions route to store our session data
app.post('/sessions', function(req, res) {
    db.User.authenticate(req.body.email, req.body.password, function(err, user) {
        if (user) {
            req.session.userId = user._id;
            res.redirect('/profile');
        } else {
          res.redirect('/login'); //do something meaninful here to alert bad password or un
        }
    });
});

// show user profile page
app.get('/profile', function(req, res) {
    // find the user currently logged in
    User.findOne({
        _id: req.session.userId
    }, function(err, currentUser) {
        res.render('index.ejs', {
            user: currentUser
        })

    });
});

// show user profile page
app.get('/api/languages/:id', function(req, res) {
    // find the user currently logged in
    User.findOne({
        _id: req.params.id
    }, function(err, currentUser) {
      if(err){return console.log("ERR: " , err);}
      // I'm going to go through every single language
      // search the user db for userse iwth native language ==== learnLang
      // map them all to nativeSpeakers, return native speakers
      var nativeSpeakers = [];
      User.find({nativeLang: currentUser.learnLang}, function nativeSpeakers(err, newFriends){
        console.log('We found ' + newFriends.length + ' native speakers');

        res.json(newFriends)
      })
    });
});
//logout
app.get('/logout', function(req, res) {
    // remove the session user id
    req.session.userId = null;
    // redirect to login (for now)
    res.redirect('/login');
});
/*
 * JSON API Endpoints
 */

app.get('/api', controllers.api.index);

app.get('/api/users', controllers.users.index);

app.get('/api/users/:id', controllers.users.displayUser);

app.post('/api/users', controllers.users.create);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log('Express server is up and running on http://localhost:3000/');
});
