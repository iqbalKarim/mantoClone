const Product = require("../models/products")
const { validationResult } = require("express-validator")

exports.getProducts = (req, res) => {
  //select will specify the fields (columns)
  Product.find()
    .select("_id title description price")
    .then((products) => {
      res.status(200).json({ products })
    })
    .catch((err) => {
      res.status(400).json({ error: err })
    })
}

exports.createProduct = async (req, res) => {
  try {
    let product = await Product.create(req.body)
    res.status(201).json({ product })
  } catch (error) {
    res.status(400).json({ error })
  }
}
