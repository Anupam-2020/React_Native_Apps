const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

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

AppSchema.pre('save', async function (next) {
    const user = this;
    // console.log('Password befor encryption', user.password);
    if(!user.isModified('password')) {
        return next();
    }
    user.password = await bcrypt.hash(user.password, 10);
    // console.log("After encryption", user.password)
    next();
})

module.exports = mongoose.model('User', AppSchema);