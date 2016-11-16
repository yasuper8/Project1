var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

var NativeLanUser = require('./NativeLanUser.js');
var LearnUser = require('./learnLanUser.js');

module.exports.NativeLanUser = NativeLanUser;
module.exports.LearnUser = LearnUser;
