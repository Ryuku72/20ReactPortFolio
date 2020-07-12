const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
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

const Post = mongoose.model("Post", postSchema);

module.exports = Post;