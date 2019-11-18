const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservedSchema = new Schema({
    date: Date,
    table: {type: Number, default: 1},
    client: {type: String, default: ''},
    phone: String
});

const Reserved = mongoose.model('Reserved', ReservedSchema);

module.exports = Reserved;