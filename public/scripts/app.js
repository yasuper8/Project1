console.log("Sanity Check: JS is working!");

$(document).ready(function(){

    // check to make sure JS is loaded
  console.log('JS is connected to HTML, and DOM is ready!');




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



// sophie trying to add a update functionaliy

// $('.update-currentUser').on('submit', function (e) {
//   e.preventDefault();
//
//   // find the todo's id (stored in HTML as `data-id`)
//   var userId = $(this).closest('.currentUser').attr('data-id');
//   console.log(userId)
//   // find the todo to update by its id
//   var userToUpdate = allUsers.filter(function (currentUser) {
//     return currentUser._id == userId;
//   })[0];
//   console.log(currentUser._id);
//
//   // serialze form data
//   var updatedUser = $(this).serialize();
//   console.log(updatedUser)
//
//   // PUT request to update todo
//   $.ajax({
//     type: 'PUT',
//     url: '/api/languages' + '/' + userId,
//     data: updatedUser,
//     success: function(data) {
//       //  replace todo to update with newly updated version (data)
//     allUsers.splice(allUsers.indexOf(userToUpdate), 1, data);
//       // render all todos to view
//       render();
//     }
//   });
// })



// //update current user info
// $('#update-form').on('submit', function(e) {
//     console.log("Update form clicked!")
//     var gifUrl;
//     var userAnimal;
//     e.preventDefault();
//     // Getting data form giphy api
//     $.ajax({
//       url: "http://api.giphy.com/v1/gifs/search?q=" + $('#favoriteAnimal').val() +  "&api_key=dc6zaTOxFJmzC",
//       type: "GET",
//       success: successGifUpdate,
//       error: errorGif
//     });
//
//     // find the user's id (stored in HTML as `data-id`)
//     var userId = $(this).closest('.update').attr('data-id');
//     console.log("user id is", userId);
//
//     function successGifUpdate(gifResponse) {
//       userAnimal = $('#favoriteAnimal').val();
//       var i = getRandomInt(1, 10);
//       gifUrl = gifResponse.data[i].images.fixed_height.url;
//       $('#profileUrl').val(gifUrl);
//       $('#name').val(userAnimal);
//       var updatedData = $("#update-form").serialize();
//
//       $.ajax({
//         url: "/api/users/" + userId,
//         type: "PUT",
//         data: updatedData,
//         success: successUpdate,
//         error: errorUpdate
//       });
//       $('#updateModal').modal('toggle');
//     };
//
//     function errorGif(a,b,c) {
//       console.log("error getting giffy")
//     }
//
//     function successUpdate(response) {
//         console.log("response from update", response)
//     }
//
//     function errorUpdate(a,b,c) {
//         console.log("error updating!")
//         $('#signUp-error').show();
//     }
//
//
// }); //end of update

//update current user info
$('#update-form').on('submit', function(e) {
    console.log("Update form clicked!")
    e.preventDefault();

    // find the user's id (stored in HTML as `data-id`)
    var userId = $(this).closest('.update').attr('data-id');
    console.log("user id is", userId);

    var updatedData = $("#update-form").serialize();
    console.log("updated info :", updatedData)
    $.ajax({
      url: "/api/users/" + userId,
      type: "PUT",
      data: updatedData,
      success: successUpdate,
      error: errorUpdate
    });


    function successUpdate(response) {
        console.log("response from update", response)
        $('#updateModal').modal('toggle');
    }

    function errorUpdate(err, b, c) {
        console.log("error a updating!", err)
        console.log("error b updating!", b)
        console.log("error c updating!", c)
        // $('#signUp-error').show();
    }


}); //end user update


    var userId = $('.welcome').data('id');
  //  console.log(userId);
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



}) // end ready
