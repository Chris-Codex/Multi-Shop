const mongose = require("mongoose");


const orderSchema = mongose.Schema(
    {
        orderItems: [],
        address: {
            type: String,
            required: true
        },

        address_order: {
            type: String,
            required: true
        },

        address_order: {
            type: String,
            required: true
        },

        city: {
            type: String,
            required: true
        },

        zip: {
            type: String,
            required: true
        },

        country: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            required: true
        },

        status: {
            type: String,
            required: true
        },

        totalPrice: {
            type: Number,
            required: true
        },

        user: {
            type: String,
            required: true
        },

        date_ordered: {
            type: String,
            default: Date.now
        },

    }
)
