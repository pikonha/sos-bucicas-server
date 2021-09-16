import mongoose from 'mongoose'

const Animal = mongoose.Schema({
  name: string,
  found_at: Date,
  status: stirng,
  location: string
})

export default mongoose.model('Animal', Animal)
