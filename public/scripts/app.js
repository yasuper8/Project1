console.log("Sanity Check: JS is working!");

$(document).ready(function(){
    // check to make sure JS is loaded
  console.log('JS is connected to HTML, and DOM is ready!');

  //Creating romdom integer for getting random image form giphy api
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //Signup form submit
  $('#signup-form').on('submit', function(e) {
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

  }); //end of signup


  //Update current user info
  $('.update-currentUser').on('submit', function(e) {
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

    // Find the user's id (stored in HTML as `data-id`)
    var userId = $(this).closest('.update').attr('data-id');
    console.log("user id is", userId);

    function successGifUpdate(gifResponse) {
      userAnimal = $('#favoriteAnimal').val();
      var i = getRandomInt(1, 10);
      gifUrl = gifResponse.data[i].images.fixed_height.url;
      $('#profileUrl').val(gifUrl);
      $('#name').val(userAnimal);
      var updatedUser = $("#update-form").serialize();

      $.ajax({
        type: 'PUT',
        url: '/api/users' + '/' + userId,
        data: updatedUser,
        success: successUpdate,
        ereor: errorUpdate
      });

      $('#updateModal').modal('toggle');
    };

    function errorGif(a,b,c) {
      console.log("error getting giffy")
    }

    function successUpdate(response) {
        console.log("response from update", response)
        $('.reset').val('');
        location.reload()
    }

    function errorUpdate(a,b,c) {
        console.log("error updating!")
        $('#signUp-error').show();
    }

  }); //end of update


  //Shows all users
  var userId = $('.welcome').data('id');
  console.log(userId);
  $.ajax({
    method: 'GET',
    url: '/api/languages/' + userId,
    type: 'json',
    success: getUserSuccess,
    error: getUserError
  });


  function getUserSuccess(json) {
      allUsers = json;
    renderUser();
  }

  function getUserError(a,b,c) {
    console.log("can't get user!")
  }

  function renderUser() {
    var source = $('#users-template').html();
    var template = Handlebars.compile(source);
    var usersHtml = template({ users: allUsers });
    $('#foundUsers').prepend(usersHtml);
  };


}) // end ready
