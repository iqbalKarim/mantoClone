const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required!",
  },
  description: {
    type: String,
    require: "Description is required!",
  },
  price: {
    type: Number,
    require: "Price is required!",
  },
})

module.exports = mongoose.model("Products", productsSchema)
