import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  active: Boolean,
});

export default mongoose.model('Services', schema);
