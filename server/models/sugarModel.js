const mongoose = require('mongoose');

const sugarSchema = new mongoose.Schema({
    sugar: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    }
    
}, { timestamps: true })


module.exports = mongoose.model('Sugar', sugarSchema)