const mongoose = require("mongoose")

const sizesSchema = new mongoose.Schema({
  size: { required: true, type: String },
  identifier: { required: true, type: String },
  availability: { default: true, type: String },
})

const itemsSchema = new mongoose.Schema({
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
  images: [
    {
      type: String,
      required: true,
    },
  ],
  onSale: {
    type: Boolean,
    default: false,
  },
  isSalePercentage: Boolean,
  sale: Number,
})

module.exports = mongoose.model("Items", itemsSchema)
