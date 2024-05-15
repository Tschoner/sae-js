const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log('Connected to MongoDB');
});

const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

module.exports.Post = mongoose.model('Post', postSchema);
