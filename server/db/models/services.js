import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  key: {type: String, unique: true},
});

export default mongoose.model('Services', schema);
