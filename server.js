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
app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	next();
});

app.use(session({
	saveUninitialized: true,
	resave: true,
	// TODO: Change this SuperSecretCookie to something else, otherwise its not a secret.
	secret: 'SuperSecretCookie',
	cookie: {
		maxAge: 30 * 60 * 1000
	} // 30 minute cookie lifespan (in milliseconds)
}));


/************
 * DATABASE *
 ************/

var db = require('./models');
// TODO: Instead of User requiring ./models/user (which db already has access to) you could assign it User = db.User;
var User = require('./models/user');

/**********
 * ROUTES *
 **********/

//TODO: What is going on here? Is this needed?
//is this /users or /signup?
app.post('/signup', function (req, res) {
	res.json("it worked!");
});

// Sign up route - creates a new user with a secure password
app.post('/users', function (req, res) {
	// use the email and password to authenticate here
	//TODO: Why are you using db.User here when you have User defined above?
	//TODO: Instead of passing in a lot of arguments, could you simply pass in a variable that is assigned to req.body? Have the createSecure method pull out all of the various attributes of a user instead of here.
	db.User.createSecure(req.body.email, req.body.password, req.body.name, req.body.nativeLang, req.body.learnLang, req.body.current, req.body.favoriteAnimal, req.body.profileUrl, req.body.friends, function (err, user) {
		res.json(user);
	});
});

// Update user
app.put('/api/users/:id', function (req, res) {
	// get user id from url params (`req.params`)
	var currentUserId = req.params.id;
	// find userId in db
	//TODO: Why are you using db.User here when you have User defined above?
	db.User.findOne({
		_id: currentUserId
	}, function (err, foundUser) {
		if (err) {
			res.status(500)
				.json({
					error: err.message
				});
		} else {
			// update the users's attributes
			//TODO: Are there any other attributes that a user might want to update instead of their learnLang?
			foundUser.learnLang = req.body.learnLang;

			// save updated user in db
			foundUser.save(function (err, savedUser) {
				if (err) {
					res.status(500)
						.json({
							error: err.message
						});
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


// TODO: This route will always render first. Also, Check your terminal when loading this page. there is a cast error :(
app.get('/', function homepage(req, res) {
	res.render('signup');
});

// TODO: This route is the same route as above, but with a different action. Why?
app.get('/', function homepage(req, res) {
	res.sendFile(__dirname + '/views/signup.ejs');
});

// Login route with placeholder response
app.get('/login', function (req, res) {
	res.render('login');
});

//A post sessions route to store our session data
app.post('/sessions', function (req, res) {
	db.User.authenticate(req.body.email, req.body.password, function (err, user) {
		if (user) {
			req.session.userId = user._id;
			res.redirect('/profile');
		} else {
			res.redirect('/login'); //do something meaninful here to alert bad password or un
		}
	});
});

// Show user profile page
app.get('/profile', function (req, res) {
	// find the user currently logged in
	// TODO: Assign the req.session.userId to a variable and pass the variable into the db call
	User.findOne({
		_id: req.session.userId
	}, function (err, currentUser) {
		// TODO: What happens if there is an error?
		res.render('index.ejs', {
			user: currentUser
		})

	});
});

// Show user profile page
// TODO: This route leads me to believe that you have languages as a db model (based on RESTful conventions) You might want to rename this route to something else.
app.get('/api/languages/:id', function (req, res) {
	// find the user currently logged in
	User.findOne({
		_id: req.params.id
	}, function (err, currentUser) {
		if (err) {
			return console.log("ERR: ", err);
		}
		// I'm going to go through every single language
		// search the user db for users with native language ==== learnLang
		// map them all to nativeSpeakers, return native speakers
		var nativeSpeakers = [];
		User.find({
			nativeLang: currentUser.learnLang
		}, function nativeSpeakers(err, newFriends) {
			res.json(newFriends)
		})
	});
});

//Logout
app.get('/logout', function (req, res) {
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

app.delete('/api/users/:id', controllers.users.destroy);

app.get('/api/users/:id', controllers.users.displayUser);

app.post('/api/users', controllers.users.create);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
	console.log('Express server is up and running on http://localhost:3000/');
});
