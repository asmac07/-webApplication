require("dotenv").config()
const express = require("express")
const session = require("express-session")
const path = require("path")
const mongoose = require("mongoose")

const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")
const adminRoutes = require("./routes/adminRoutes")

const app = express()

connectDB()

app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
    next()

})
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use("/", userRoutes)
app.use("/admin", adminRoutes)

app.listen(process.env.PORT, () => {
    console.log("server started")
})