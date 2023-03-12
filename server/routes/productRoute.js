const { query } = require("express")
const express = require("express")
const router = express.Router()
const productModel = require("../model/products")
const { ObjectId } = require("mongodb")


//Post Products
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


//Get All Products
router.get("/", async (req, res) => {

    try {
        const product = await productModel.find()
        res.send(product)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


//Get One Product
router.get("/:productid", async (req, res) => {

    try {
        const getProductById = await productModel.findOne(req.body.productid)
        res.send(getProductById)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


//Edit Product
router.patch("/update/:productid", async (req, res) => {
    try {
        const productId = new ObjectId(req.params.productid)
        const editProduct = await productModel.updateOne(
            { _id: productId },
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

//Delete Product
router.delete("/remove/:productid", async (req, res) => {
    const productId = req.params.productid

    let removeProduct

    if (!ObjectId.isValid(productId)) {
        return res.status(400).json({ message: "Product ID is invalid" })
    }

    try {
        removeProduct = await productModel.findByIdAndDelete(productId)

        if (!removeProduct) {
            return res.status(400).json({ message: 'Product not found' })
        }

        return res.status(200).json({ message: "Product Deleted" })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router

