const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Base de donné Connecté');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDb