const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

// book API 

router.post("/createBook", bookController.createBook  )

router.get("/getBooksWithAuthorDetailsAndPublisher", bookController.getBooksWithAuthorDetails)

router.put("/updateIsHardcover/:id", bookController.updateIsHardcover)

// creating publisher

router.post("/createPublisher", publisherController.createPublisher)


module.exports = router;