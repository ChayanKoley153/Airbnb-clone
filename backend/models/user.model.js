const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({  
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: { 
        type: String,   
        required: true,
    },
    listing:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing',
    },
    booking:{  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
    }

    
},{timestamps: true}); // Automatically manage createdAt and updatedAt fields

const User = mongoose.model('User', userSchema); // Create User model from schema

module.exports = User; // Export User model for use in other files