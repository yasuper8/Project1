var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var LearnUserSchema = new Schema({
  name: String,
  nativeLang: String,
  learnLang: String,
  curentCity: String
});

var LearnUser = mongoose.model('LearnUser', LearnUserSchema);
module.exports = LearnUser;
