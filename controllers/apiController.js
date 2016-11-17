
function index(req, res) {
  res.json({
    message: "Welcome to Sophie & Yasu's Project 1!",
    documentation_url: "https://github.com/tgaff/api.md",
    base_url: "http://.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}


module.exports.index = index;