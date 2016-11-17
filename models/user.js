var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  email: String,
  passwordDigest: String,
  name: String,
  nativeLang: Array,
  learnLang : Array,
  currentCity: String,
  favoriteAnimal: String,
  profileUrl: String,
  friends: [{type: Schema.Types.ObjectId, ref: 'User'}]
});


// create a new user with secure (hashed) password
UserSchema.statics.createSecure = function (email, password, name, nativeLang, learnLang, currentCity, favoriteAnimal, profileUrl, friends, callback) {
// `this` references our user model, since this function will be called from the model itself
// store it in variable `UserModel` because `this` changes context in nested callbacks

var UserModel = this;

// hash password user enters at sign up
bcrypt.genSalt(function (err, salt) {
  console.log('salt: ', salt);  // changes every time
  bcrypt.hash(password, salt, function (err, hash) {

    // create the new user (save to db) with hashed password
    UserModel.create({
      email: email,
      passwordDigest: hash,
      name: name,
      nativeLang: nativeLang,
      learnLang : learnLang,
      currentCity: currentCity,
      favoriteAnimal: favoriteAnimal,
      profileUrl: profileUrl,
      friends: friends
    }, callback);
  });
});
};


var User = mongoose.model('User', UserSchema);
module.exports = User;
