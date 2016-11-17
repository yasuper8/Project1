var db = require('./models');

var user_lists = [
  {
    name: "Casey Oneal",
    email: "",
    password: "",
    nativeLang: ["english"],
    learnLang: ["spanish"],
    currnetCity: "San Francisco",
    favoriteAnimal: "wolf",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Daniel Kingdon",
    email: "",
    password: "",
    nativeLang: ["english"],
    learnLang: ["chinese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "elephant",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Daniel Finelli",
    email: "",
    password: "",
    nativeLang: ["english"],
    learnLang: ["japanese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "giraffe",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Sophie Luo",
    email: "",
    password: "",
    nativeLang: ["chinese"],
    learnLang: ["english"],
    currnetCity: "San Francisco",
    favoriteAnimal: "panda",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Derry Nixon",
    email: "",
    password: "",
    nativeLang: ["english"],
    learnLang: ["japanese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "whale",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Emily Johnson",
    email: "",
    password: "",
    nativeLang: ["english"],
    learnLang: ["chinese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "penguin",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Diane Liu",
    email: "",
    password: "",
    nativeLang: ["chinese"],
    learnLang: ["russian"],
    currnetCity: "San Francisco",
    favoriteAnimal: "turtle",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Jonathan Hall",
    email: "",
    password: "",
    nativeLang: ["english"],
    learnLang: ["chinese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "duck",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Katie Dodd",
    email: "",
    password: "",
    nativeLang: ["english"],
    learnLang: ["spanish"],
    currnetCity: "San Francisco",
    favoriteAnimal: "Koala",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Kevin Tran",
    email: "",
    password: "",
    nativeLang: ["english"],
    learnLang: ["spanish"],
    currnetCity: "San Francisco",
    favoriteAnimal: "lion",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Margaret Ha",
    email: "",
    password: "",
    nativeLang: ["english"],
    learnLang: ["spanish"],
    currnetCity: "San Francisco",
    favoriteAnimal: "rabbit",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Kyle Russell",
    email: "",
    password: "",
    nativeLang: ["english"],
    learnLang: ["chinese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "leopard",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Martin Uriarte",
    email: "",
    password: "",
    nativeLang: ["english"],
    learnLang: ["spanish"],
    currnetCity: "San Francisco",
    favoriteAnimal: "lion",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Solimar Beniquez",
    email: "",
    password: "",
    nativeLang: ["spanish"],
    learnLang: ["russian"],
    currnetCity: "San Francisco",
    favoriteAnimal: "giraffe",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Star Kim",
    email: "",
    password: "",
    nativeLang: ["korean"],
    learnLang: ["spanish"],
    currnetCity: "San Francisco",
    favoriteAnimal: "eagle",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Stephen Dangerfield",
    email: "",
    password: "",
    nativeLang: ["english"],
    learnLang: ["chinese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "elephant",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Virginia Chae",
    email: "",
    password: "",
    nativeLang: ["english"],
    learnLang: ["spanish"],
    currnetCity: "San Francisco",
    favoriteAnimal: "dolphin",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Vladyslav Kuliani",
    email: "",
    password: "",
    nativeLang: ["russian"],
    learnLang: ["chinese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "horse",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Yasuyoshi Sakamoto",
    email: "yasuper8@gmail.com",
    password: "",
    nativeLang: ["japanese"],
    learnLang : ["english"],
    currnetCity: "San Francisco",
    favoriteAnimal: "eagle",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Justin Castilla",
    email: "",
    password: "",
    nativeLang: ["english"],
    learnLang: ["spnish"],
    currnetCity: "San Francisco",
    favoriteAnimal: "puppy",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
  },
  {
    name: "Jean W",
    email: "",
    password: "",
    nativeLang: ["english"],
    learnLang: ["japanese"],
    currnetCity: "San Francisco",
    favoriteAnimal: "dolphin",
    profileUrl: ""
    // friends: {type: User.Types.ObjectId, ref: "User"}
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
