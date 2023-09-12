const Item = require("../models/items")
const bodyParser = require("body-parser")

exports.getItems = (req, res) => {
  Item.find()
    .then((items) => {
      res.status(200).json({ items })
    })
    .catch((err) => {
      res.status(400).json({ error: err.message })
    })
}

exports.createItem = async (req, res) => {
  try {
    let item = await Item.create(req.body)
    res.status(201).json({ item })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.deleteItem = async (req, res) => {
  try {
    let item = await Item.findByIdAndDelete(req.body.id)
    res.status(200).json({ item })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
