const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderIngredientSchema = new Schema({
    order: Array,
    orderCategory: { type: Schema.Types.ObjectId, ref: 'OrderCategory' },
    editingOrder: Boolean,
    pendingOrder: Boolean,
    orderHasArrived: Boolean


});

const OrderIngredient = mongoose.model('OrderIngredient', OrderIngredientSchema);

module.exports = OrderIngredient;