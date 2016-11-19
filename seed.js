var db = require('./models');

var user_lists = [
  {
    name: "Casey Oneal",
    email: "Casey@ga.com",
    password: "",
    nativeLang: "english",
    learnLang: "spanish",
    currnetCity: "San Francisco",
    favoriteAnimal: "wolf",
    profileUrl: "https://media.giphy.com/media/xTiTnAWsCOrpoyyat2/giphy.gif"

  },
  {
    name: "Daniel Kingdon",
    email: "DanielK@ga.com",
    password: "",
    nativeLang: "english",
    learnLang: "chinese",
    currnetCity: "San Francisco",
    favoriteAnimal: "elephant",
    profileUrl: "https://media.giphy.com/media/3o7GVCSdd9h0HkF6V2/giphy.gif"

  },
  {
    name: "Daniel Finelli",
    email: "DanielF@ga.com",
    password: "",
    nativeLang: "english",
    learnLang: "japanese",
    currnetCity: "San Francisco",
    favoriteAnimal: "giraffe",
    profileUrl: "https://media.giphy.com/media/EunkIKBvu79fO/giphy.gif"

  },
  {
    name: "Sophie Luo",
    email: "Sophie@ga.com",
    password: "",
    nativeLang: "chinese",
    learnLang: "english",
    currnetCity: "San Francisco",
    favoriteAnimal: "panda",
    profileUrl: "https://media.giphy.com/media/ieaUdBJJC19uw/giphy.gif"

  },
  {
    name: "Derry Nixon",
    email: "Derry@ga.com",
    password: "",
    nativeLang: "english",
    learnLang: "japanese",
    currnetCity: "San Francisco",
    favoriteAnimal: "whale",
    profileUrl: "https://media.giphy.com/media/yoJC2A59OCZHs1LXvW/giphy.gif"

  },
  {
    name: "Emily Johnson",
    email: "Emily@ga.com",
    password: "",
    nativeLang: "english",
    learnLang: "chinese",
    currnetCity: "San Francisco",
    favoriteAnimal: "penguin",
    profileUrl: "https://media2.giphy.com/media/wTgYlmxctT2O4/200w.gif#22"

  },
  {
    name: "Diane Liu",
    email: "Diane@ga.com",
    password: "",
    nativeLang: "chinese",
    learnLang: "russian",
    currnetCity: "San Francisco",
    favoriteAnimal: "turtle",
    profileUrl: "https://media0.giphy.com/media/DWlXW6ehVx1S0/200.gif#22"

  },
  {
    name: "Jonathan Hall",
    email: "Jonathan@ga.com",
    password: "",
    nativeLang: "english",
    learnLang: "chinese",
    currnetCity: "San Francisco",
    favoriteAnimal: "duck",
    profileUrl: "https://media3.giphy.com/media/wsEX8uMrTRDoI/200.gif#1"

  },
  {
    name: "Katie Dodd",
    email: "Katie@ga.com",
    password: "",
    nativeLang: "english",
    learnLang: "spanish",
    currnetCity: "San Francisco",
    favoriteAnimal: "Koala",
    profileUrl: "https://media.giphy.com/media/G4XMUPe7a0FHO/giphy.gif"

  },
  {
    name: "Kevin Tran",
    email: "Kevin@ga.com",
    password: "",
    nativeLang: "english",
    learnLang: "spanish",
    currnetCity: "San Francisco",
    favoriteAnimal: "lion",
    profileUrl: "https://media.giphy.com/media/l2R03UYSQTeRzucKc/giphy.gif"

  },
  {
    name: "Margaret Ha",
    email: "Margaret@ga.com",
    password: "",
    nativeLang: "english",
    learnLang: "spanish",
    currnetCity: "San Francisco",
    favoriteAnimal: "rabbit",
    profileUrl: "https://media4.giphy.com/media/l3vRdNUR4XPpRoPmM/200.gif#8"

  },
  {
    name: "Kyle Russell",
    email: "Kyle@ga.com",
    password: "",
    nativeLang: "english",
    learnLang: "chinese",
    currnetCity: "San Francisco",
    favoriteAnimal: "leopard",
    profileUrl: "https://media0.giphy.com/media/l0MYR64Gp8bQ2RGYo/200.gif#5"

  },
  {
    name: "Martin Uriarte",
    email: "Martin@ga.com",
    password: "",
    nativeLang: "english",
    learnLang: "spanish",
    currnetCity: "San Francisco",
    favoriteAnimal: "lion",
    profileUrl: "https://media.giphy.com/media/l2R03UYSQTeRzucKc/giphy.gif"

  },
  {
    name: "Solimar Beniquez",
    email: "Solimar@ga.com",
    password: "",
    nativeLang: "spanish",
    learnLang: "russian",
    currnetCity: "San Francisco",
    favoriteAnimal: "giraffe",
    profileUrl: "https://media3.giphy.com/media/JmBXdjfIblJDi/200.gif#0"

  },
  {
    name: "Star Kim",
    email: "Star@ga.com",
    password: "",
    nativeLang: "korean",
    learnLang: "spanish",
    currnetCity: "San Francisco",
    favoriteAnimal: "bear",
    profileUrl: "https://media0.giphy.com/media/3o7TKMt1VVNkHV2PaE/200w.gif#2"

  },
  {
    name: "Stephen Dangerfield",
    email: "Stephen@ga.com",
    password: "",
    nativeLang: "english",
    learnLang: "chinese",
    currnetCity: "San Francisco",
    favoriteAnimal: "elephant",
    profileUrl: "https://media0.giphy.com/media/85AU17hrcbCCMko/200.gif#2"

  },
  {
    name: "Virginia Chae",
    email: "Virginia@ga.com",
    password: "",
    nativeLang: "english",
    learnLang: "spanish",
    currnetCity: "San Francisco",
    favoriteAnimal: "dolphin",
    profileUrl: "https://media2.giphy.com/media/VwTPbIxJyN1w4/200.gif#46"

  },
  {
    name: "Vladyslav Kuliani",
    email: "Vladyslav@ga.com",
    password: "",
    nativeLang: "russian",
    learnLang: "chinese",
    currnetCity: "San Francisco",
    favoriteAnimal: "horse",
    profileUrl: "https://media3.giphy.com/media/bsyc2LUo9ToWY/200.gif#18"

  },
  {
    name: "Yasuyoshi Sakamoto",
    email: "yasuper8@gmail.com@ga.com",
    password: "",
    nativeLang: "japanese",
    learnLang : "english",
    currnetCity: "San Francisco",
    favoriteAnimal: "dog",
    profileUrl: ""

  },
  {
    name: "Justin Castilla",
    email: "Justin@ga.com",
    password: "",
    nativeLang: "english",
    learnLang: "spnish",
    currnetCity: "San Francisco",
    favoriteAnimal: "puppy",
    profileUrl: "https://media4.giphy.com/media/9u5SmANtz7zIQ/200w.gif#5"

  },
  {
    name: "Jean Weatherwax",
    email: "Jean@ga.com",
    password: "",
    nativeLang: "english",
    learnLang: "japanese",
    currnetCity: "San Francisco",
    favoriteAnimal: "dolphin",
    profileUrl: "https://media0.giphy.com/media/l41m6YZzaqxZQp4IM/200.gif#35"

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
