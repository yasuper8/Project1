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



//Redirct partical info from first sign up form
// function signup(req, res) {
//   // receive first page's data
//   res.redirect('signup2.html', json: {"usename": req.body.username, "any info": });
// }

// Create a new user
function create(req, res) {
  console.log('body', req.body);
  db.User.create(req.body, function(err, user) {
    if (err) { console.log('error', err); }
    console.log(user);
    res.json(user);
  });
}


// destroy: destroy,
// update: update


// export public methods here
module.exports = {
  index: index,
  displayUser: displayUser,
  create: create
};
