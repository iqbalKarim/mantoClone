const mongoose = require("mongoose")

// db

dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGO_URI).then(() => console.log("Connected to MongoDB"))
  } catch (error) {
    console.log("DB Connection error: ", error.message)
  }
}

module.exports = dbConnect
