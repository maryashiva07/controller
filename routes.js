const express = require("express");

const router = express.Router();

// GET /products
router.get("/products", (req, res) => {
    res.send("Here is the list of all products.");
});

// POST 
router.post("/products", (req, res) => {
    res.send("A new product has been added.");
});


// GET /categories
router.get("/categories", (req, res) => {
    res.send("Here is the list of all categories.");
});


// POST 
router.post("/categories", (req, res) => {
    res.send("A new category has been created.");
});

module.exports = router;