const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://kazmialiMongoDB:KazmiAli123Mongo@cluster0.7zbv0zf.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;

