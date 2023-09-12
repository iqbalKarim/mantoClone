const express = require("express")
const { getItems, createItem, deleteItem } = require("../controllers/items")
const { validationMiddleware } = require("../validationMiddleware")
const { itemValidatorSchema } = require("../validators/items")

const router = express.Router()

router.get("/", getItems)
router.post("/", itemValidatorSchema, validationMiddleware, createItem)
router.delete("/", deleteItem)

module.exports = router
