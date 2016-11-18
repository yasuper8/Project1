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


//signup button clicked
$('#signup-form').on('submit', function(e) {
    console.log("form clicked!")
    console.log($('#cityDropdown option:selected').text());
    e.preventDefault();
    var signupData = $("#signup-form").serialize();
      console.log(signupData);
      // send POST request to /users with the form data
      $.post('/users', signupData, function(response){
        console.log(response);
      });
})


      $.ajax({
        method: 'GET',
        url: '/api/users',
        type: 'json',
        success: getUserSuccess,
        error: getUserError
      });


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
      console.log(allUsers)
      var usersHtml = template({ users: allUsers });
      $('#foundUsers').prepend(usersHtml);
    };




}) // end ready
