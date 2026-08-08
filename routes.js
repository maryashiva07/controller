// Build Your Own Library System with Express.js!

const express = require("express");
const router = express.Router();

//get

router.get("/books", (req, res)=>{
    res.send("Here is the list of books!");
})


//post

router.post("/books", (req, res)=>{
    res.send("Book has been added!");
})


module.exports = router;












// const express = require("express");

// const router = express.Router();

// // GET /products
// router.get("/products", (req, res) => {
//     res.send("Here is the list of all products.");
// });

// // POST 
// router.post("/products", (req, res) => {
//     res.send("A new product has been added.");
// });


// // GET /categories
// router.get("/categories", (req, res) => {
//     res.send("Here is the list of all categories.");
// });


// // POST 
// router.post("/categories", (req, res) => {
//     res.send("A new category has been created.");
// });

// module.exports = router;