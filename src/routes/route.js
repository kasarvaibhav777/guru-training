const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/findbook", bookController.createBook)

router.get("/allbook", bookController.getBooksData)

module.exports = router;