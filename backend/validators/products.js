const { body } = require("express-validator")

// prettier-ignore
exports.productValidatorSchema = [
    body("title").notEmpty().escape().withMessage('Title is required'), 
    body("description").notEmpty().escape().withMessage('Description is required'), 
    body("productType").notEmpty().escape().withMessage('Product Type is required'),
    body('categoryIds').isArray().notEmpty().escape().withMessage('Invalid Category values'), 
    body("gender").notEmpty().escape().withMessage("Gender is required")   
]
