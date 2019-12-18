const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
    invoiceItems:[{
        title: String,
        price: {type: Number, default: 0},
    }],
    invoicePrice: {type: Number, default: 0},
    staff: String,//{ type: Schema.Types.ObjectId, ref: 'User' },
    paymentMethod: String,
    created_at: Date
});

const Invoice = mongoose.model('Invoice', InvoiceSchema);

module.exports = Invoice;