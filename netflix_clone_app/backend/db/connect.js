const mongoose = require('mongoose');

const connect = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/netflix_clone')
        console.log('Db connected');
    } catch(err) {
        console.log(err)
    }
}

module.exports = connect();