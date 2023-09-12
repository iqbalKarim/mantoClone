const Category = require("../models/categories")

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find()
    res.status(200).json({ categories })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body)
    res.status(201).json({ category })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.deleteCategory = async (req, res) => {
  try {
    let category = await Category.findByIdAndDelete(req.body.id)
    res.status(200).json({ category })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
