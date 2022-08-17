const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {type:String,required:true},
    authorName: String,
    tags: [ String ],
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalPages: Number,
    year: { type: Number, default: 2021 },
    stockAvailable: Boolean
}, { timestamps: true });


module.exports = mongoose.model('kitab', bookSchema) //users

