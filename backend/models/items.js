const mongoose = require("mongoose")

const sizesSchema = new mongoose.Schema({
  size: { required: true, type: String },
  identifier: { required: true, type: String },
  availability: { default: true, type: String },
})

const itemsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  categoryIds: [
    {
      type: Number,
      required: true,
    },
  ],
  description: {
    type: String,
    requrired: true,
  },
  color: String,
  price: {
    type: Number,
    required: true,
  },
  sizes: [
    {
      type: sizesSchema,
    },
  ],
  material: String,
  width: Number,
  length: Number,
  poetry: String,
  poet: String,
  careInstruction: [String],
  images: [
    {
      type: String,
      required: true,
    },
  ],
  bestSeller: {
    type: Boolean,
    default: false,
  },
  productType: { type: String, required: true },
  gender: { type: String, required: true },
  onSale: {
    type: Boolean,
    default: false,
  },
  isSalePercentage: Boolean,
  sale: Number,
})

module.exports = mongoose.model("Items", itemsSchema)
