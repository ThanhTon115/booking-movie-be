import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Movie = new Schema({
  name: String,
  image_url: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Movie', Movie);
