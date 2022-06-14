const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleWares = require("../middleWares/auth.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUsers", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", middleWares.auth, userController.getUserData)

router.put("/update/:userId", middleWares.auth , userController.updateUser)

router.delete("/deleteUser/:userId", middleWares.auth ,userController.deleteUser)

module.exports = router;