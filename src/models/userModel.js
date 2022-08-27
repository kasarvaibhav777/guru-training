const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
	balance:{type:Number,default:100}, // Default balance at user registration is 100
	address:String,
	age: Number,
    gender: {
             type: String,
             enum: ["male", "female", "other"] 
            },
	isFreeAppUser: Boolean
}, { timestamps: true });


module.exports = mongoose.model('vaibhav', userSchema)