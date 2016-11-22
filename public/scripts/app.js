console.log("Sanity Check: JS is working!");

$(document).ready(function(){
    // check to make sure JS is loaded
  console.log('JS is connected to HTML, and DOM is ready!');

  //Creating romdom integer for getting a random image form giphy api
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
      url: "https://api.giphy.com/v1/gifs/search?q=" + $('#favoriteAnimal').val() +  "&api_key=dc6zaTOxFJmzC",
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
      $('.reset').val('');
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
    e.preventDefault();

    // Find the user's id (stored in HTML as `data-id`)
    var userId = $(this).closest('.update').attr('data-id');
    console.log("user id is", userId);
    var updatedUser = $("#update-form").serialize();
    console.log("udate user", updatedUser);
    $.ajax({
      type: 'PUT',
      url: '/api/users' + '/' + userId,
      data: updatedUser,
      success: successUpdate,
      ereor: errorUpdate
    });

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

  // Delete a cunnrent user

  $('.deleteUser').on('click', function(event) {
    event.preventDefault();
    console.log("delete btn clicked!");
    var userId = $(this).closest('.deleteUser').attr('data-id');
    console.log(userId);
    $.ajax({
      method: 'DELETE',
      url: "api/users/" + $(this).attr('data-id'),
      success: handleDeleteAUser,
      error: handleDeleteAUser
    });
  });

  function handleDeleteAUser(json) {
    console.log("delete a user success!")
    // $.ajax({
    //   method: 'DELETE',
    //   url: "api/users/" + $(this).attr('data-id'),
    //   success: handleDeleteAUser,
    //   error: handleDeleteAUser
    // });
  }

  function handleDeleteUser(e) {
    console.log('uh oh');
    $('#results').text('Failed to delete a user, is the server working?');
  }

  //Shows all users who matched with users leran language
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
