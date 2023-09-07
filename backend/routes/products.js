const express = require("express")
const { getProducts, createProduct } = require("../controllers/products")
const { productValidatorSchema } = require("../validators/products")
const { validationMiddleware } = require("../validationMiddleware")

const router = express.Router()

router.get("/", getProducts)

//checks using productValidatorSchema, validationMiddleware sends error or continues request
router.post("/", productValidatorSchema, validationMiddleware, createProduct)

module.exports = router
