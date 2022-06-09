const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorcontroller.js")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", AuthorController.createAuthor)

router.post("/createBook", BookController.createBook)

router.get("/BookByChetanBhagat", BookController.BookByChetanBhagat)

router.get("/UpdatePrice", BookController.UpdatePrice)

router.get("/AuthorOnPrice", BookController.AuthorOnPrice)
 
router.get("/books/:AuthorId", BookController.booksByAuthorId)

router.get("/authorsWithRatings", BookController.authorsWithRatings)

module.exports = router;