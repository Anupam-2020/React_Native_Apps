const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/shopping_cart';

const connectDb = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to db');
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectDb;