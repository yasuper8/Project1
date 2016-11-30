/************
 * DATABASE *
 ************/

var db = require('../models');


// Get All Users
function index(req, res) {
	db.User.find({}, function (err, users) {
		if (err) {
			return console.log('Get users error: ' + err);
		}
		// TODO: res.json is supposed to send a json object. You are sending an array of objects.
		res.json(users);
	});
}

// Get a single user
function displayUser(req, res) {
	// TODO: Consider assigning req.params.id to a variable and passing the variable instead.
	db.User.findOne({
		_id: req.params.id
	}, function (err, user) {
		//TODO: What happens if there is an error?
		res.json(user);
	});
}

// Create a new user
function create(req, res) {
	// TODO: Consider assigning req.body to a variable and passing the variable instead.
	db.User.create(req.body, function (err, user) {
		if (err) {
			console.log('error', err);
		}
		res.json(user);
	});
}

// Delete a current user
function destroy(req, res) {
	// TODO: Consider assigning req.params.id to a variable and passing the variable instead.
	db.User.findOneAndRemove({
		_id: req.params.id
	}, function (err, user) {
		// TODO: Oops! This console.log will execute every single time; place it in a conditional check.
		console.log('sever error ', err)
		res.send("Successfully deleted!")
	});
}

// export public methods here
module.exports = {
	index: index,
	displayUser: displayUser,
	create: create,
	destroy: destroy
};
