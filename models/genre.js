const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const genreSchema = new Schema({
  name: {
    type: String,
    min: 3,
    max: 100,
  },
});

// Virtual for genre's URL
genreSchema.virtual("url").get(function () {
  return "/catalog/genre/" + this._id;
});

module.exports = mongoose.model("genre", genreSchema);
