const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        minLength: 6,
    },
    addMovies: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Movie",
        }
    ]
});


const adminModel = mongoose.model("Admin", adminSchema, "admin");

module.exports = adminModel;
