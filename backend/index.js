const morgan = require("morgan")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const dbConnect = require("./database")
const bodyParser = require("body-parser")
const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()

dbConnect()

//routes
const productsRoutes = require("./routes/products")
const itemsRoutes = require("./routes/items")
const categoriesRoutes = require("./routes/categories")
const adminLoginRouter = require("./routes/adminLogin")
const { adminAuth } = require("./controllers/adminLogin")

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
)
app.use(morgan("dev"))
app.use(cookieParser())
app.use(
  bodyParser.json({
    inflate: true,
  })
)

//works as a middleware now cause we now have a router in the productsRoute
app.use("/admin", adminLoginRouter)
app.get("/checker", adminAuth, (req, res) => {
  res.status(200).json({ message: "hogya" })
})
app.use("/products", productsRoutes)
app.use("/items", itemsRoutes)
app.use("/categories", categoriesRoutes)

app.listen(process.env.PORT || 8081, () => {
  console.log("Server running on port " + process.env.PORT)
})
