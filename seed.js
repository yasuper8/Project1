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
