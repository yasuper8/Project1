function index(req, res) {
	// TODO: Good start! Make sure to add all of your routes if you are going to include this one.  Also make sure to update your heroku app name down below.
	res.json({
		message: "Welcome to Sophie & Yasu's Project 1!",
		documentation_url: "https://github.com/tgaff/api.md",
		base_url: "http://.herokuapp.com",
		endpoints: [
			{
				method: "GET",
				path: "/api",
				description: "Describes available endpoints"
			}
    ]
	});
}


module.exports.index = index;
