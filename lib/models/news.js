const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    title: String,
    text: String,
    img: String,
    created_at: Date
});

const News = mongoose.model('News', NewsSchema);

module.exports = News;