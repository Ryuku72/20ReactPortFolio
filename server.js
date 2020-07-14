const mongoose = require('mongoose');
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Define API routes here
app.use(require("./routes"));

mongoose.connect(process.env.MONGO || 'mongodb://localhost/profile');
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


