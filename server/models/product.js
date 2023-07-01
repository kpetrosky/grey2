const { Schema, model } = require('mongoose');

const productSchema = new Schema({
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
  price: {
    type: String,
    required: true,
    minlength: 5,
  },
  measurements: {
    type: String,
    required: true,
    minlength: 4,
  },
});

const Party = model('Party', productSchema);

module.exports = Party;

