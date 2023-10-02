const jwt = require("jsonwebtoken")
const AdminUsers = require("../models/adminUsers")

exports.adminLogin = async (req, res) => {
  const { username, password } = req.body

  // console.log('datum', req.b)
  try {
    const user = await AdminUsers.findOne({ username, password }).select(["_id", "username"])
    if (!user) {
      res.status(401).json({
        error: "Login not successful: User not found",
      })
    } else {
      // const age = 3 * 60 * 60 //3 hrs in seconds
      const age = 60 //3 hrs in seconds
      const token = jwt.sign(
        {
          id: user._id,
          username: user.username,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: age,
        }
      )

      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: age * 1000, // 3hrs in ms
      })

      res.status(200).json({
        message: "Login successful",
        user,
        age,
        token,
      })
    }
  } catch (error) {
    res.status(400).json({
      error: "An error occurred: " + error.message,
    })
  }
}

exports.register = async (req, res) => {
  const { username, password } = req.body
  if (password.length < 6) {
    return res.status(400).json({ message: "Password less than 6 characters" })
  }
  try {
    await AdminUsers.create({
      username,
      password,
    }).then((user) =>
      res.status(200).json({
        message: "User successfully created",
        user,
      })
    )
  } catch (err) {
    res.status(401).json({
      error: "User not successful created" + err.message,
    })
  }
}

//admin auth middleware
exports.adminAuth = async (req, res, next) => {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: "Not authorized, invalid token." })
      } else {
        return res.status(201).json({ decodedToken })
      }
    })
  } else {
    return res.status(401).json({ error: "Not authorized, token not available." })
  }
}
