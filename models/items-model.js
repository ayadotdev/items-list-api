const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    }, {
    timestamps: true
    });


const Item = mongoose.model('Item', itemSchema);

module.exports = Item;