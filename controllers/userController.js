/************
 * DATABASE *
 ************/

var db = require('../models');


// Get All Users
function displayAllUsers(req, res) {
  db.User.find(function(err, allUsers) {
    if (err) {
      return console.log('Get users error: ' + err);
    }
    res.json(allUsers);
  });
}

//Get a single user
function displayUser(req, res) {
  db.User.findOne({_id: req.params.id}, function(err, user) {
    res.json(user);
  });
}


// export public methods here
module.exports = {
  displayAllUsers: displayAllUsers,
  displayUser: displayUser
  // create: create,
  // show: show,
  // destroy: destroy,
  // update: update
};
