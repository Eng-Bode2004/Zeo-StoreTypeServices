const mongoose = require('mongoose');

const StoreType = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },

    description:{
        type: String,
        required: true,
    },

    icon:{
        type: String,
    },

    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }]

},{timestamps: true});

module.exports = mongoose.model("StoreType", StoreType);