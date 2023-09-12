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
  productType: {
    type: String,
    required: "Product Type is required",
  },
  categoryIds: [
    {
      type: Number,
      required: true,
    },
  ],
  gender: { type: String, required: true },
  material: String,
  width: Number,
  length: Number,
  poetry: String,
  poet: String,
  careInstruction: [String],
  fitInformation: String,
  bestSeller: {
    type: Boolean,
    default: false,
  },
  items: [String],
})

module.exports = mongoose.model("Products", productsSchema)
