const AuthorModel= require("../models/authorModel")
const BookModel= require("../models/bookModel")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const getAuthourId= async function (req, res) {
    let authorid= await AuthorModel.find( {"author_name":"Chetan Bhagat"} )
    let bookID= authorid[0].author_id
    let final=await BookModel.find({author_id:bookID})
  res.send({msg:final})
}
const listAuthor= async function (req, res) {
    let priceBt= await BookModel.find( { price : { $gte: 50, $lte: 100} } )
    let data=priceBt.map(v=>v.author_id);
    let finalData= await AuthorModel.find({author_id:data}).select({author_name:1,_id:0});
    res.send(finalData);
 }
module.exports.createAuthor= createAuthor
module.exports.getAuthourId= getAuthourId
module.exports.listAuthor= listAuthor
