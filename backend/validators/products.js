const { body } = require("express-validator")

// prettier-ignore
exports.productValidatorSchema = [
    body("title").notEmpty().escape(), 
    body("description").notEmpty().escape(), 
    body("price").isNumeric().notEmpty().escape()
]
