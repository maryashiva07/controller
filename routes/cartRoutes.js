const express = require("express");
const router = express.Router();

router.get("/cart/:userId", (req, res)=>{
     const id = Number(req.params.userId);
     res.send(`Fetching cart for user with ID: ${userId}`);
});


router.post("/cart/:userId", (req, res)=>{
    const id = Number(req.params.userId);

    res.send(`Adding product to cart for user with ID: ${userId}`);
});

module.exports = router;