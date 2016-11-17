var db = require('./models');

var user_lists = [
  {
    name: "Casey Oneal",
    email: "",
    nativeLang: ["english"],
    learnLang: ["spanish"],
    currnetCity: "San Francisco",
    favoriteAnimal: "wolf",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Daniel Kingdon",
    email: "",
    nativeLang: ["english"],
    learnLang: ["chinese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "elephant",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Daniel Finelli",
    email: "",
    nativeLang: ["english"],
    learnLang: ["japanese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "giraffe",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Sophie Luo",
    email: "",
    nativeLang: ["chinese"],
    learnLang: ["english"],
    currnetCity: "San Francisco",
    favoriteAnimal: "panda",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Derry Nixon",
    email: "",
    nativeLang: ["english"],
    learnLang: ["japanese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "whale",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Emily Johnson",
    email: "",
    nativeLang: ["english"],
    learnLang: ["chinese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "penguin",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Diane Liu",
    email: "",
    nativeLang: ["chinese"],
    learnLang: ["russian"],
    currnetCity: "San Francisco",
    favoriteAnimal: "turtle",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Jonathan Hall",
    email: "",
    nativeLang: ["english"],
    learnLang: ["chinese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "duck",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Katie Dodd",
    email: "",
    nativeLang: ["english"],
    learnLang: ["spanish"],
    currnetCity: "San Francisco",
    favoriteAnimal: "Koala",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Kevin Tran",
    email: "",
    nativeLang: ["english"],
    learnLang: ["spanish"],
    currnetCity: "San Francisco",
    favoriteAnimal: "lion",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Margaret Ha",
    email: "",
    nativeLang: ["english"],
    learnLang: ["spanish"],
    currnetCity: "San Francisco",
    favoriteAnimal: "rabbit",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Kyle Russell",
    email: "",
    nativeLang: ["english"],
    learnLang: ["chinese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "leopard",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Martin Uriarte",
    email: "",
    nativeLang: ["english"],
    learnLang: ["spanish"],
    currnetCity: "San Francisco",
    favoriteAnimal: "lion",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Solimar Beniquez",
    email: "",
    nativeLang: ["spanish"],
    learnLang: ["russian"],
    currnetCity: "San Francisco",
    favoriteAnimal: "giraffe",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Star Kim",
    email: "",
    nativeLang: ["korean"],
    learnLang: ["spanish"],
    currnetCity: "San Francisco",
    favoriteAnimal: "eagle",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Stephen Dangerfield",
    email: "",
    nativeLang: ["english"],
    learnLang: ["chinese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "elephant",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Virginia Chae",
    email: "",
    nativeLang: ["english"],
    learnLang: ["spanish"],
    currnetCity: "San Francisco",
    favoriteAnimal: "dolphin",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Vladyslav Kuliani",
    email: "",
    nativeLang: ["russian"],
    learnLang: ["chinese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "horse",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Yasuyoshi Sakamoto",
    email: "",
    nativeLang: ["japanese"],
    learnLang : ["english"],
    currnetCity: "San Francisco",
    favoriteAnimal: "eagle",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Justin Castilla",
    email: "",
    nativeLang: ["english"],
    learnLang: ["spnish"],
    currnetCity: "San Francisco",
    favoriteAnimal: "puppy",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Jean W",
    email: "",
    nativeLang: ["english"],
    learnLang: ["japanese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "dolphin",
    profileUrl: "",
    friends: {type: User.Types.ObjectId, ref: "User"}
  }
];


db.User.remove({}, function(err, user) {
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('Removed all users');
    db.User.create(user_lists, function(err, user) {
      if (err) { return console.log('err', err); }
      console.log('Created ' + user.length + ' users');
      process.exit();
    });
  }
});
