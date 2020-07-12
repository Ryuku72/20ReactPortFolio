const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const URI = require("../config/index")

//mongoose.connect("mongodb://localhost/assignment", {
mongoose.connect(process.env.MONGODB_URI || URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
.then(() => console.log('Database Connected!'))
.catch(err => {
console.log(`DataBase Connection Error: ${err.message}`);
});;

mongoose.connect(process.env.MONGODB_URI || URI);
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/assignment");


const assignmentschema = new Schema({
  project: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  technology: { type: String, required: true },
  summary: {type: String, required: true },
  website: { type: String },
  github: { type: String, required: true },
  readme: { type: String, required: true },
  video: { type: String },
  other: { type: String },
  clip_path: { type: String , required: true}
});

const assignment = mongoose.model("assignment", assignmentschema);

module.exports = assignment;