import mongoose from 'mongoose'

async function connect() {
  await mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`).catch(e => {
    console.error(e)
    process.exit(1);
  })
}


export default {
  connect
}
