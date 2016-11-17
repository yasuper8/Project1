var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  nativeLang: Array,
  learnLang : Array,
  currentCity: String,
  favoriteAnimal: String,
  profileUrl: String
  // friends: [{type: Object.Types.ObjectId, ref: 'User'}]
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
