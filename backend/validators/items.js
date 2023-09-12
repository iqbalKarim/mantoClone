const { body } = require("express-validator")

// prettier-ignore
exports.itemValidatorSchema = [
    body("price").isNumeric().notEmpty().escape().withMessage('Price is required'),
    body("sizes").isArray().notEmpty().withMessage('Please provide the Sizes'),
    body("sizes.*.size").notEmpty().escape().withMessage('Size is required'), 
    body("sizes.*.identifier").notEmpty().escape().withMessage('Identifier is required'),
    body("sizes.*.availability").isBoolean().withMessage('Availability must be a boolean'),
    body("images").isArray().notEmpty().escape().withMessage('Please provide images'),
]
