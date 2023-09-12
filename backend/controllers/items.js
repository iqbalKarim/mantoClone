const Item = require("../models/items")
const bodyParser = require("body-parser")

exports.getItems = (req, res) => {
  res.status(200).json({
    yes: "Success",
  })
}

exports.createItem = async (req, res) => {
  try {
    console.log(req.body.sizes)
    let item = await Item.create(req.body)
    res.status(201).json({ item })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
