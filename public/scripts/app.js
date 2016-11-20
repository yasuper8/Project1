console.log("Sanity Check: JS is working!");

$(document).ready(function(){

    // check to make sure JS is loaded
  console.log('JS is connected to HTML, and DOM is ready!');


  // $('#userSignUpForm').on('submit', function(e) {
  //     e.preventDefault();
  //     console.log('new user name, passwords serialized', $(this).serialize());
  //     $.ajax({
  //       method: 'POST',
  //       url: '/api/users',
  //       data: $(this).serialize(),
  //       success: newUserSuccess,
  //       error: newUserError
  //     });
  //   });


  //Creating romdom integer for getting random image form giphy
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

//signup button clicked
$('#signup-form').on('submit', function(e) {
    console.log("form clicked!")
    console.log($('#cityDropdown option:selected').text());
    var gifUrl;
    var userAnimal;
    e.preventDefault();
    // Getting data form giphy api
    $.ajax({
      url: "http://api.giphy.com/v1/gifs/search?q=" + $('#favoriteAnimal').val() +  "&api_key=dc6zaTOxFJmzC",
      type: "GET",
      success: successGif,
      error: errorGif
    });

    function successGif(gifResponse) {
      userAnimal = $('#favoriteAnimal').val();
      var i = getRandomInt(1, 10);
      gifUrl = gifResponse.data[i].images.fixed_height.url;
      $('#profileUrl').val(gifUrl);
      $('#name').val(userAnimal);
      var signupData = $("#signup-form").serialize();

      $.ajax({
        url: "/users",
        type: "POST",
        data: signupData,
        success: successSignup,
        error: errorSignup
      });
      $('#signUpModal').modal('toggle');
      $('#signUp-succ').show();
    };

    function errorGif(a,b,c) {
      console.log("error getting giffy")
    }

    function successSignup(response) {
        console.log(response)
    }

    function errorSignup(a,b,c) {
        console.log("error signup!")
        $('#signUp-error').show();
    }


    // // Getting data form giphy api
    //
    // $('.#userSignUpForm').click(function(e) {
    //   e.preventDefault()
    //   console.log("click noticed")
    //
    //   $.ajax({
    //     url: "http://api.giphy.com/v1/gifs/search?q=" + $('#favoriteAnimal').val() +  "&api_key=dc6zaTOxFJmzC",
    //     type: "GET",
    //     success: successGif,
    //     error: errorGif
    //   });
    // });
    //
    //
    // function successGif(gifResponse) {
    //   console.log(gifResponse.data[0].bitly_url);
    // }

}); //end of signup




//update current user info
$('#update-form').on('submit', function(e) {
    console.log("Update form clicked!")
    var gifUrl;
    var userAnimal;
    e.preventDefault();
    // Getting data form giphy api
    $.ajax({
      url: "http://api.giphy.com/v1/gifs/search?q=" + $('#favoriteAnimal').val() +  "&api_key=dc6zaTOxFJmzC",
      type: "GET",
      success: successGifUpdate,
      error: errorGif
    });

    function successGifUpdate(gifResponse) {
      userAnimal = $('#favoriteAnimal').val();
      var i = getRandomInt(1, 10);
      gifUrl = gifResponse.data[i].images.fixed_height.url;
      $('#profileUrl').val(gifUrl);
      $('#name').val(userAnimal);
      var updatedData = $("#update-form").serialize();

      $.ajax({
        url: "/users",
        type: "POST",
        data: updatedData,
        success: successUpdate,
        error: errorUpdate
      });
      $('#updateModal').modal('toggle');
    };

    function errorGif(a,b,c) {
      console.log("error getting giffy")
    }

    function successUpdate(response) {
        console.log(response)
    }

    function errorUpdate(a,b,c) {
        console.log("error signup!")
        $('#signUp-error').show();
    }


}); //end of update




    var userId = $('.welcome').data('id');
    console.log(userId);
    $.ajax({
      method: 'GET',
      url: '/api/languages/' + userId,
      type: 'json',
      success: getUserSuccess,
      error: getUserError
    });



    $('#findMatch').on('click', function() {
      console.log("find match button clicked!");

    });

    function getUserSuccess(json) {
        allUsers = json;
        for (var i=0; i<allUsers.length; i++) {
        console.log(allUsers[i].nativeLang)
      }
      renderUser();
    }

    function getUserError(a,b,c) {
      console.log("can't get user!")
    }

    function renderUser() {
      var source = $('#users-template').html();
      var template = Handlebars.compile(source);
      //console.log(allUsers)
      var usersHtml = template({ users: allUsers });
      $('#foundUsers').prepend(usersHtml);
    };







}) // end ready


//
// $('#userSignUpCityAnimal').on('submit', function(e) {
//   e.preventDefault();
//   console.log('new user current city, passwords serialized', $(this).serialize());
//   $.ajax({
//     method: 'POST',
//     url: '/api/users',
//     data: $(this).serialize(),
//     success: newUserSuccess,
//     error: newUserError
//   });
// });
