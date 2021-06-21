const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/public'));

const fs = require("fs");
fs.readFile("terms.json", function(err, data) {
  if (err) throw err;
  const terms = JSON.parse(data)


  app.get("/", function(req, res) {
    res.render("home");
  })

  app.get("/about", function(req, res) {
    res.render("about");
  })

  app.get("/contact", function(req, res) {
    res.render("contact");
  })

  app.get("/projects", function(req, res) {
    res.render("projects");
  })

  app.get("/services", function(req, res) {
    res.render("services");
  })

  app.get("/terms", function(req, res) {
    res.render("terms", {
      terms: terms
    });
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});