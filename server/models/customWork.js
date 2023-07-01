const { Schema, model } = require('mongoose');

const CustomWorkSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  product: {
    type: String,
    required: true,
    minlength: 5,
  },
  message: {
    type: String,
    required: true,
    minlength: 5,
  },
  specs: {
    type: String,
    required: true,
    minlength: 4,
  },
});

const CustomWork = model('CustomWork', CustomWorkSchema);

module.exports = CustomWork;


