const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  family_name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  date_of_birth: {
    type: Date,
  },
  date_of_death: {
    type: Date,
  },
});

//virtual for author's full name
AuthorSchema.virtual("name").get(function () {
  return this.family_name + ", " + this.family_name;
});

//virtual for author's lifespan
AuthorSchema.virtual("lifespan").get(function () {
  return (
    this.date_of_birth.getYear() - this.date_of_birth.getYear()
  ).toString();
});

//VIRTUAL FOR AUTHOR URL
AuthorSchema.virtual("url").get(function () {
  return "/catlog/author/" + this._id;
});

module.exports = mongoose.model("Author", AuthorSchema);
