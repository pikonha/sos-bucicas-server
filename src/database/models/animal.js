import mongoose from 'mongoose';

const Animal = mongoose.Schema({
  name: String,
  found_at: Date,
  status: String,
  location: String,
});

export default mongoose.model('Animal', Animal);
