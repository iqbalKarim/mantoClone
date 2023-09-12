const express = require("express")
const { getItems, createItem } = require("../controllers/items")
const { validationMiddleware } = require("../validationMiddleware")
const { itemValidatorSchema } = require("../validators/item")

const router = express.Router()

router.get("/", getItems)
router.post("/", itemValidatorSchema, validationMiddleware, createItem)

module.exports = router
