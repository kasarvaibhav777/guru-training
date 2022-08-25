const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res) {

           let book=req.body
           if(book.author){
            const check=await authorModel.findById(book.author)
            if(check){
                if(book.publisher){
                    const Check=await publisherModel.findById(book.publisher)
                    if(Check){
                        let bookCreated=await bookModel.create(book)
                        res.send({data:bookCreated})

                    }else res.send("please enter correct publisher id")
                }else res.send("please enter publisher id")
            }else res.send("please enter correct author id")
           }else res.send("please enter author id")

}



const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author publisher')
    console.log(specificBook);
    res.send(specificBook)

}


const books = async function (req, res) {
    let semifinal= await publisherModel.find({name:["Penguin","HarperCollins"]}).select({_id:1})
    let final=await bookModel.updateMany( {publisher:semifinal},{isHardCover:true},{ new: true })

    let quaterfinal= await authorModel.find({rating:{$gte:3.5}}).select({_id:1})
    
    let finalq=await bookModel.updateMany({author:quaterfinal},{ $inc: { price: 10 }},{ new: true })
    res.send({final,finalq})
 }

    



module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.books = books
