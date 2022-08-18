const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const AuthorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", BookController.createBook  )
router.post("/createAuthor", AuthorController.createAuthor )
router.get("/getAuthourId", AuthorController.getAuthourId)
router.get("/updateBooks", BookController.updateBooks)
router.get("/listAuthor", AuthorController.listAuthor)


module.exports = router;