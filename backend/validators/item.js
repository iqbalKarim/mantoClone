const { body } = require("express-validator")

// prettier-ignore
exports.itemValidatorSchema = [
    body("title").notEmpty().escape().withMessage('Title is required'),
    body('categoryIds').isArray().notEmpty().escape().withMessage('Invalid Category values'), 
    body("description").notEmpty().escape().withMessage('Description is required'), 
    body("price").isNumeric().notEmpty().escape().withMessage('Price is required'),
    body("sizes").isArray().notEmpty().escape().withMessage('Please provide the Sizes'),
    body("images").isArray().notEmpty().escape().withMessage('Please provide images'),
    body("productType").notEmpty().escape().withMessage('Product Type is required'),
    body("gender").notEmpty().escape().withMessage("Gender is required")
]
