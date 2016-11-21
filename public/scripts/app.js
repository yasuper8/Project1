console.log("Sanity Check: JS is working!");

$(document).ready(function(){

    // check to make sure JS is loaded
  console.log('JS is connected to HTML, and DOM is ready!');


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
      gifUrl = gifResponse.data[0].images.fixed_height.url;
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
    };

    function errorGif(a,b,c) {
      console.log("error getting giffy")
    }

    function successSignup(response) {
        console.log(response)
    }

    function errorSignup(a,b,c) {
        console.log("error signup!")
    }

}); //end of signup


$('.update-currentUser').on('submit', function (e) {
  e.preventDefault();

  // find the todo's id (stored in HTML as `data-id`)
  var userId = $(this).closest('.currentUser').attr('data-id');

  // find the todo to update by its id
  var userToUpdate = allUsers.filter(function (currentUser) {
    return currentUser._id == userId;
  })[0];
  // console.log(currentUser._id);

  // serialze form data
  var updatedUser = $(this).serialize();
  console.log(updatedUser)

  // PUT request to update todo
  $.ajax({
    type: 'PUT',
    url: '/api/users' + '/' + userId,
    data: updatedUser,
    success: successUpdate,
    ereor: errorUpdate
  });

});


//shows all users
    var userId = $('.welcome').data('id');

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
      //console.log(allUsers)
      var usersHtml = template({ users: allUsers });
      $('#foundUsers').prepend(usersHtml);
    };


    function successUpdate(data) {
      //  replace user to update with newly updated version (data)
      console.log("response from update", data)
       $('#updateModal').modal('toggle');
      // render all todos to view
      renderUser();
    };

    function errorUpdate(a,b,c) {
      console.log("update user error!")
    };



}); // end ready
