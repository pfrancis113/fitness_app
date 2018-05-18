// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // login route loads login.html (Cecilia)
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // Profile route loads profile.html (Cecilia)
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // strength route loads strength.html
  app.get("/strength", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/strength.html"));
  });

  // yoga route loads yoga.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/yoga.html"));
  });

  // speed route loads speed.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create-workout.html"));
  });

};