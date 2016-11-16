var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var NativeLangUserSchema = new Schema({
  name: String,
  nativeLang: String,
  learnLang: String,
  curentCity: String,
  favoriteAnimal: String
});

var NativeLangUser = mongoose.model('NativeLangUser', NativeLangUserSchema);
module.exports = NativeLangUser;
