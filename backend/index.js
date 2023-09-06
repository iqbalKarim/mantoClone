const morgan = require("morgan")
const dbConnect = require("./database")
const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()

dbConnect()

//routes
const productsRoutes = require("./routes/productsRoute")

app.use(morgan("dev"))

//works as a middleware now cause we now have a router in the productsRoute
app.use("/", productsRoutes)

app.listen(process.env.PORT || 8081, () => {
  console.log("Server running on port " + process.env.PORT)
})
