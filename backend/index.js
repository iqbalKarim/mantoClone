const morgan = require("morgan")
const dbConnect = require("./database")
const bodyParser = require("body-parser")
const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()

dbConnect()

//routes
const productsRoutes = require("./routes/products")

app.use(morgan("dev"))
app.use(bodyParser.json())

//works as a middleware now cause we now have a router in the productsRoute
app.use("/products", productsRoutes)

app.listen(process.env.PORT || 8081, () => {
  console.log("Server running on port " + process.env.PORT)
})
