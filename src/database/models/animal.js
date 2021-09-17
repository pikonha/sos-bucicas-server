import mongoose from 'mongoose';

const Animal = mongoose.Schema({
  name: String,
  foundAt: Date,
  status: String,
  location: String,
});

export default mongoose.model('Animal', Animal);
