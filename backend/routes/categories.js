const express = require("express")
const { categorySchemaValidator } = require("../validators/categories")
const { validationMiddleware } = require("../validationMiddleware")
const { getAllCategories, createCategory, deleteCategory } = require("../controllers/categories")

const router = express.Router()

router.get("/", getAllCategories)
router.post("/", categorySchemaValidator, validationMiddleware, createCategory)
router.delete("/", deleteCategory)

module.exports = router
