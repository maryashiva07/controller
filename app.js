const express = require("express");
const app = express();

const port = 5666;

app.listen(port, ()=>{
     console.log(`Server is up and running on Port ${port}! Ready to handle requests`);
})