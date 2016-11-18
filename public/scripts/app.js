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
    e.preventDefault();
    var signupData = $("#signup-form").serialize();
      console.log(signupData);
      // send POST request to /users with the form data
      $.post('/users', signupData, function(response){
        console.log(response);
      });
})


//login form
$('#login-form').on('submit', function(e) {
    console.log("form clicked!")
     e.preventDefault();
    var loginData = $("#login-form").serialize();
      console.log(loginData);
      // send POST request to /users with the form data
      $.post('/sessions', loginData, function(response){
        console.log(response);
      });
})




    // $('#userSignUpLang').on('submit', function(e) {
    //   e.preventDefault();
    //   console.log('new user languages, passwords serialized', $(this).serialize());
    //   $.ajax({
    //     method: 'POST',
    //     url: '/api/users',
    //     data: $(this).serialize(),
    //     success: newUserSuccess,
    //     error: newUserError
    //   });
    // });
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

    function newUserSuccess() {

    }




}) // end ready
