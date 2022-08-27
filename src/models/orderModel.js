const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {

    userId: {
        type: ObjectId,
        ref: "vaibhav"
    }, 
     productId:{
        type: ObjectId,
        ref: "Product"
    },
    amount: Number,
	isFreeAppUser: {type:Boolean, default:false},
	date: String

}, { timestamps: true });


module.exports = mongoose.model('order', orderSchema)