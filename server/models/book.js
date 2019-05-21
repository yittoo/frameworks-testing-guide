var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema(
  {
    title: { type: String },
    year: { type: Number },
    genre: { type: String },
    author: { type: String },
    movieId: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
      }
    }
  },
  {
    usePushEach: true
  }
);

module.exports = mongoose.model("Book", bookSchema);
