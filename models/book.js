const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: String,
  publisher: String,
  description: String
},{collection: 'card-catalog'})

module.exports = mongoose.model('Book', bookSchema);