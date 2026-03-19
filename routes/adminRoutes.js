const express = require("express")
const router = express.Router()

const adminController = require("../controllers/adminController")
const adminAuth = require("../middlewares/adminAuth")

router.get("/login", adminController.loadLogin)
router.post("/login", adminController.login)

router.get("/dashboard", adminAuth, adminController.dashboard)

router.get("/add-user", adminAuth, adminController.loadAddUser)
router.post("/add-user", adminAuth, adminController.addUser)

router.get("/edit-user/:id", adminAuth, adminController.loadEditUser)
router.post("/update-user/:id", adminAuth, adminController.updateUser)

router.get("/delete-user/:id", adminAuth, adminController.deleteUser)

router.get("/search", adminAuth, adminController.searchUser)

router.get("/logout", adminController.logout)

module.exports = router