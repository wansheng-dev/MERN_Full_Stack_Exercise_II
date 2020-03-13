const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [
        true,
        'Author name is requried.'
      ],
      minlength: [
        3,
        'Author name must be at least 3 characters.'
      ]
    },
  },
  {
    timestamps: true
  }
);

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;