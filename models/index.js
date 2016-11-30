var mongoose = require("mongoose");
// TODO: 'signup' is not a good name for your db, maybe call it "mongodb://localhost/lingo-jungle"?
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/signup");

var User = require('./user.js');
module.exports.User = User;
