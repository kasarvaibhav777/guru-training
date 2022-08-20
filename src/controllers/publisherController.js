const PublisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let author = req.body
    let authorCreated = await PublisherModel.create(author)
    res.send({data: authorCreated})
}

const getPublishersData= async function (req, res) {
    let authors = await PublisherModel.find()
    res.send({data: authors})
}

module.exports.createPublisher= createPublisher
module.exports.getPublishersData= getPublishersData