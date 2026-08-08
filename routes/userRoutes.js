const express = require("express");
const router = express.Router();

router.get("/users", (req, res)=>{
    const data = req.body;
    res.send("Fetching all users");
});

router.post("/users", (req, res)=>{
    res.send("Adding new user");
});

router.get("/users/:id", (req, res)=>{
    const userId = req.params.id;
    res.send(`Fetching user with ID: ${userId}`);
});


module.exports = router;