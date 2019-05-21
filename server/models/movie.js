var mongoose = require("mongoose");

var movieSchema = new mongoose.Schema(
  {
    title: { type: String },
    year: { type: Number },
    genre: { type: String },
    director: { type: String },
    bookId: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
      }
    }
  },
  {
    usePushEach: true
  }
);

module.exports = mongoose.model("Movie", movieSchema);
