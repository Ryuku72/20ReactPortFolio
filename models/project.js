const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
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

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;