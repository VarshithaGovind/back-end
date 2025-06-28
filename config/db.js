const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mini-projects')
        console.log('✅ Database connected')
    } catch (err) {
        console.error('❌ Database connection failed')
        process.exit(1) 
    }
}

module.exports = connectDB;
