const { body } = require('express-validator')

exports.categorySchemaValidator = [
    body('categoryName').notEmpty().escape().withMessage('Category Name must not be empty')
]