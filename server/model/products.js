const mongose = require("mongoose");

const productSchema = mongose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        price: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        image: {
            type: String,
            required: true
        },

        color: {
            type: String,
            required: true
        },

        size: {
            type: String,
            required: true
        }
    }
)

module.exports = mongose.model("product", productSchema)