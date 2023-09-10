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
  productType: {
    type: String,
    required: "Product Type is required",
  },
  category: {
    type: String,
  },
  color: {
    type: String,
  },
  images: {
    type: [String],
  },
  bestSeller: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model("Products", productsSchema)
