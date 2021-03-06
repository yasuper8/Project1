/************
 * DATABASE *
 ************/

var db = require('../models');


// Get All Users
function index(req, res) {
  db.User.find({},function(err, users) {
    if (err) {
      return console.log('Get users error: ' + err);
    }
    res.json(users);
  });
}

// Get a single user
function displayUser(req, res) {
  db.User.findOne({_id: req.params.id}, function(err, user) {
    res.json(user);
  });
}

// Create a new user
function create(req, res) {
  db.User.create(req.body, function(err, user) {
    if (err) { console.log('error', err); }
    res.json(user);
  });
}

// Delete a current user
  function destroy(req, res) {
  db.User.findOneAndRemove({_id: req.params.id}, function(err, user) {
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
