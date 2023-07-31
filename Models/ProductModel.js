const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    image: {
        type: Array,
        required: true
    },

    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    isOnSell: {
        type: Boolean,
        default: false,
    },
    sellPercentage: {
        type: Number,
        default: 0,
    },
    quantity: {
        available: {
            type: Number,
            required: true,
            default: 0,
        },
        sold: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
    },
    brand: {
        type: String,
        required: true,
    },
    vendor: {
        type: String,
        required: true,
    },
    review: [
        {
            userId: {
                type: String,
                required: true,
            },
            anonymous: {
                type: Boolean,
                required: true,
            },
            review: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
        },
    ],
    productVariant: {
        color: String,
        size: String,
    },
    productTags: Array,

    // Laptop & mobile
    ram: {
        type: String,

    },
    rom: {
        type: String,

    },
    processor: {
        type: String,

    },
    display: {
        type: String,

    },
    battery: {
        type: String,

    },
}, { timestamps: true });


module.exports = mongoose.model("Product", productSchema)