var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");


var User = require('./user.js');
module.exports.User = User;
