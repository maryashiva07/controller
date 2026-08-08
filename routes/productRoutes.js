const express = require("express");
const router = express.Router();

router.get("/products", (req, res)=>{
    const data = req.body;
    res.send("Fetching all products");
});

router.post("/products", (req, res)=>{
    res.send("Adding new product");
});

router.get("/products/:id", (req, res)=>{
    const userId = req.params.id;
    res.send(`Fetching product with ID: ${productId}`);
});


module.exports = router;