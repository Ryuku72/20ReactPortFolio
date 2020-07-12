//NPM packages
const express = require("express");
const mongoose = require("mongoose");

//Port
const app = express();
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Routes
app.use(require("./routes/html.js"));
app.use(require("./routes/api.js"))

// Connect to the Mongo DB

// Mongoose
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/projectinfo";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(`DB Connection Error: ${err.message}`);
});

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  