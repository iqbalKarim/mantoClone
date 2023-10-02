const express = require("express")
const { adminLogin, register } = require("../controllers/adminLogin")

const router = express.Router()

router.post("/login", adminLogin)
router.post("/register", register)

module.exports = router
