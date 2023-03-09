const express = require("express")
const router = express.Router()
const productModel = require("../model/products")

router.post("/", (req, res) => {
    const { title, price, description, category, image, color, size } = req.body

    const addProduct = new productModel({
        title, price, description, category, image, color, size
    })



    try {
        const saveProduct = addProduct.save()
        res.status(200).json({ product: saveProduct })
    } catch (error) {
        res.send({ message: error.message })
    }


})

module.exports = router