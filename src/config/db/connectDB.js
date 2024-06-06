const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/learn_f8', {
        });
        console.log('Connected!');
    } catch (error) {
        console.error('Failed to connect to the database', error);
    }
}

module.exports = { connect };
