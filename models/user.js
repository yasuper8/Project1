var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  email: String,
  password: String,
  nativeLang: [String],
  learningLang : [String],
  favoriteAnimal: String,
  profileUrl: String,
  currentCity: String,
  friends: {type: Schema.Types.ObjectId, ref: 'User'}
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
