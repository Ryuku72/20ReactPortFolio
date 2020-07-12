const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  project: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  technology: { type: String, required: true },
  summary: {type: String },
  website: { type: String },
  github: { type: String },
  readme: { type: String },
  video: { type: String },
  other: { type: String },
  clip_path: { type: String , required: true}
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;