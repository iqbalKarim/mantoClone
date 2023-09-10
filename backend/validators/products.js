const { body } = require("express-validator")

// prettier-ignore
exports.productValidatorSchema = [
    body("title").notEmpty().escape().withMessage('Title is required'), 
    body("description").notEmpty().escape().withMessage('Description is required'), 
    body("price").isNumeric().notEmpty().escape().withMessage('Price is required'),
    body("productType").notEmpty().escape().withMessage('Product Type is required')
]
