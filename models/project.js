const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  project: { type: String},
  title: { type: String },
  date: { type: String },
  technology: { type: String },
  summary: {type: String },
  website: { type: String },
  github: { type: String },
  readme: { type: String },
  video: { type: String },
  other: { type: String },
  clip_path: { type: String }
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;