const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderIngredientSchema = new Schema({
    order: Array,
});

const OrderIngredient = mongoose.model('OrderIngredient', OrderIngredientSchema);

module.exports = OrderIngredient;