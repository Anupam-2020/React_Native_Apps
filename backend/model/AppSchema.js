const mongoose = require("mongoose");

const AppSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isLoggedIn: {
        type: Boolean,
        required: true
    },
    priceOfPlan: {
        type: Number,
        required: true
    },
    planName: {
        type: String,
        require: true
    },
    list: {
        type: Array
    }
})

module.exports = mongoose.model('User', AppSchema);