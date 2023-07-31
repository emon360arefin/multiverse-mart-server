const express = require("express");
const router = express.Router();

const { getProducts,
    createProduct,
    getProduct,
    deleteProduct,
    updateProduct } = require('../Controllers/ProductController')


// Get all Products 
router.get('/', getProducts)

// Get a single Product
router.get('/:id', getProduct)

// Post a new Product
router.post('/', createProduct)

// Update a Product
router.patch('/:id', updateProduct)

// Delete a Product
router.delete('/:id', deleteProduct)


module.exports = router