const { query } = require("express")
const express = require("express")
const router = express.Router()
const productModel = require("../model/products")

router.post("/", (req, res) => {
    const { title, price, description, category, image, color, size } = req.body

    const addProduct = new productModel({
        title, price, description, category, image, color, size
    })

    try {
        addProduct.save()
        res.status(200).json({ messsage: "Product Added" })
    } catch (error) {
        res.send({ message: error.message })
    }
})

router.get("/", async (req, res) => {

    try {
        const product = await productModel.find()
        res.send(product)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get("/:productid", async (req, res) => {

    try {
        const getProductById = await productModel.findOne(req.body.productid)
        res.send(getProductById)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.patch("/:productid", async (req, res) => {
    try {
        const editProduct = await productModel.updateOne(
            { id: req.params.productid },
            {
                $set: {
                    title: req.body.title,
                    price: req.body.price,
                    description: req.body.description,
                    category: req.body.category,
                    image: req.body.image,
                    color: req.body.color,
                    size: req.body.size
                }
            }
        )

        res.json(editProduct)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router

