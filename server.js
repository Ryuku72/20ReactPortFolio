//NPM packages
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")

//Port
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Routes
app.use(require("./routes/api"));
app.use(require("./routes/html"));

// Mongoose
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/projectinfo";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
.then(() => console.log('Database Connected!'))
.catch(err => {
console.log(`DB Connection Error: ${err.message}`);
});;

mongoose.connection
  .once("open", () => console.log("Connected to Mongoose"))
  .on("error", (error) => {
    console.log("Your Error: ", error);
  });

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  