const express = require("express");
const router = express.Router();

const {getProducts, addProduct, getProductById} = require("../controller/productController")

router.get("/products", getProducts);

router.post("/products", addProduct);

router.get("/products/:id", getProductById);


module.exports = router;