const express = require("express");
const path = require("path");
const app = express();
const chalk = require("chalk")
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  // Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

// Start the API server
app.listen(PORT, function () {
    console.log(
      chalk.bold.blue("Listening on port %s. 🌎"),
      chalk.bold.yellow(PORT) +
        chalk.bold.green("\nVisit ") +
        chalk.bold.blue("http://localhost:") +
        chalk.bold.yellow(PORT) +
        chalk.bold.blue("/") +
        chalk.bold.green(" in your browser")
    );
  });