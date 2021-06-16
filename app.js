const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/public'));

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

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});