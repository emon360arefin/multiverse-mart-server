const Product = require("../Models/ProductModel")
const mongoose = require('mongoose')


// Get all products

const getProducts = async (req, res) => {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json(products)
}

// Get a single product
const getProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid) {
        return res.status(404).json({ error: "No Such Product Found" })
    }

    const product = await Product.findById(id)

    if (!product) {
        return res.status(404).json({ error: "No Such Product Found" })
    }

    res.status(200).json(product)
}


// Post a new product
const createProduct = async (req, res) => {


    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}


// Update a product
const updateProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No Such Product Found' })
    }

    const product = await Product.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!product) {
        return res.status(404).json({ error: "No Such Product Found" })
    }
    res.status(200).json(product)
}


// Delete a product
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid) {
        return res.status(404).json({ error: "No Such Product Found" })
    }

    const product = await Product.findByIdAndDelete(id)

    if (!product) {
        return res.status(404).json({ error: "No Such Product Found" })
    }

    res.status(200).json(product)

}



module.exports = {
    getProducts,
    createProduct,
    getProduct,
    deleteProduct,
    updateProduct

}