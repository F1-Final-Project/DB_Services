const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderCategorySchema = new Schema({
    title: String,
});

const OrderCategory = mongoose.model('OrderCategory', OrderCategorySchema);

module.exports = OrderCategory;