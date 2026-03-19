const express = require("express")
const router = express.Router()

const userController = require("../controllers/userController")
const userAuth = require("../middlewares/userAuth")

router.get("/signup",userController.loadSignup)
router.post("/signup",userController.signup)

router.get("/login",userController.loadLogin)
router.post("/login",userController.login)

router.get("/home",userAuth,userController.home)

router.get("/logout",userController.logout)

module.exports = router