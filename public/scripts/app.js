console.log("Sanity Check: JS is working!");

$(document).ready(function(){
    // check to make sure JS is loaded
  console.log('JS is connected to HTML, and DOM is ready!');




  $('#userSignUpForm').on('submit', function(e) {
      e.preventDefault();
      console.log('new user name, passwords serialized', $(this).serialize());
      $.ajax({
        method: 'POST',
        url: '/api/users',
        data: $(this).serialize(),
        success: newUserSuccess,
        error: newUserError
      });
    });



    function




}) // end ready
