const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
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
  email: {
    type: String,
    required: true,
    minlength: 5,
  },
  message: {
    type: String,
    required: true,
    minlength: 4,
  },
});

const Contact = model('Contact', contactSchema);

module.exports = Contact;


