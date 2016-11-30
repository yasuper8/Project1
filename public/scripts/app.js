// TODO: In production versions you don't need to include the sanity checks
console.log("Sanity Check: JS is working!");

$(document)
	.ready(function () {
		// check to make sure JS is loaded
		// TODO: In production versions you don't need to include the sanity checks
		console.log('JS is connected to HTML, and DOM is ready!');

		// TODO: Great method for figuring out random gif selection! :)
		//Creating romdom integer for getting a random image form giphy api
		function getRandomInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min)) + min;
		}

		//Signup form submit
		$('#signup-form')
			.on('submit', function (e) {
				var gifUrl;
				var userAnimal;
				e.preventDefault();
				// Getting data form giphy api
				$.ajax({
					// TODO: Consider making this html string a variable defined above, then pass it into the ajax request. This will make your ajax request easier to read.
					url: "https://api.giphy.com/v1/gifs/search?q=" + $('#favoriteAnimal')
						.val() + "&api_key=dc6zaTOxFJmzC",
					type: "GET",
					success: successGif,
					error: errorGif
				});

				function successGif(gifResponse) {
					userAnimal = $('#favoriteAnimal')
						.val();
					var i = getRandomInt(1, 10);
					gifUrl = gifResponse.data[i].images.fixed_height.url;
					$('#profileUrl')
						.val(gifUrl);
					$('#name')
						.val(userAnimal);
					var signupData = $("#signup-form")
						.serialize();

					$.ajax({
						url: "/users",
						type: "POST",
						data: signupData,
						success: successSignup,
						error: errorSignup
					});
					$('#signUpModal')
						.modal('toggle');
					$('.reset')
						.val('');
					$('#signUp-succ')
						.show();
				};

				function errorGif(a, b, c) {
					// TODO: the three arguments a, b, and c are actually pretty helpful. Consider logging these instead of your error message.
					console.log("error getting giffy")
				}

				function successSignup(response) {
					// TODO: In production versions of your code there is no need to log the response.  Also, is it safe to see this information? You should not make it so easy for people to see their database ID.
					console.log(response)
				}

				function errorSignup(a, b, c) {
					// TODO: the three arguments a, b, and c are actually pretty helpful. Consider logging these instead of your error message.  Great job with the signup error show!
					console.log("error signup!")
					$('#signUp-error')
						.show();
				}

			}); //end of signup

		//Update current user info
		$('.update-currentUser')
			.on('submit', function (e) {
				e.preventDefault();

				// Find the user's id (stored in HTML as `data-id`)
				var userId = $(this)
					.closest('.update')
					.attr('data-id');
				console.log("user id is", userId);
				var updatedUser = $("#update-form")
					.serialize();
				// TODO: In production versions of your code there is no need to log information.
				console.log("udate user", updatedUser);
				$.ajax({
					type: 'PUT',
					url: '/api/users' + '/' + userId,
					data: updatedUser,
					success: successUpdate,
					ereor: errorUpdate
				});

				function successUpdate(response) {
					// TODO: In production versions of your code there is no need to log responses.
					console.log("response from update", response)
					$('.reset')
						.val('');
					location.reload()
				}

				function errorUpdate(a, b, c) {
					// TODO: the three arguments a, b, and c are actually pretty helpful. Consider logging these instead of your error message.
					console.log("error updating!")
					$('#signUp-error')
						.show();
				}

			}); //end of update

		// Delete a cunnrent user

		$('.deleteUser')
			.on('click', function (event) {
				event.preventDefault();
				console.log("delete btn clicked!");
				var userId = $(this)
					.closest('.deleteUser')
					.attr('data-id');
				console.log(userId);
				$.ajax({
					method: 'DELETE',
					url: "api/users/" + $(this)
						.attr('data-id'),
					success: handleDeleteAUser,
					error: handleDeleteAUserErr
				});
			});

		function handleDeleteAUser(json) {
			console.log("delete a user success!")
			$('#delete-succ')
				.show();
			//TODO: Can we redirect the user to your starting splash page instead of showing a delete success? Since a user deleted their account there's no nead for them to see any more information on their profile page.
		}

		function handleDeleteAUserErr(e) {
			//TODO: Are you asking the user if the server is working? They won't know anything about a server :P
			// TODO: the three arguments a, b, and c of an error are actually pretty helpful. Consider logging these instead of your error message.
			console.log('uh oh');
			$('#results')
				.text('Failed to delete a user, is the server working?');
		}

		//Shows all users who matched with users leran language
		var userId = $('.welcome')
			.data('id');
		// TODO: No need to log the userId in production code 
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

		function getUserError(a, b, c) {
			// TODO: the three arguments a, b, and c are actually pretty helpful. Consider logging these instead of your error message.
			console.log("can't get user!")
		}

		function renderUser() {
			// TODO: could we extract the source and template variables to be globals or at least arguments so we don't have to create and define the variables every time we render a user? This takes time for app.js to read the html and compile it every time we have to render a user.
			var source = $('#users-template')
				.html();
			var template = Handlebars.compile(source);
			var usersHtml = template({
				users: allUsers
			});
			$('#foundUsers')
				.prepend(usersHtml);
		};


	}) // end ready
