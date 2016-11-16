var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var NativeLanUserSchema = new Schema({
  name: String,
  nativeLang: String,
  learnLang: String,
  curentCity: String,
  favoriteAnimal: String
});

var NativeLanUser = mongoose.model('NativeLangUser', NativeLanUserSchema);
module.exports = NativeLanUser;
