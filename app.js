// Controllers!

const express = require("express");
const app = express();

const router1 = require("./routes/userRoutes");
const router2 = require("./routes/productRoutes");
const router3 = require("./routes/cartRoutes");


app.use(router1);
app.use(router2);
app.use(router3);

const port = 8000;

app.listen(port, (req, res)=>{
     console.log("app is running on port : ", port);
})






// Router and Filters


// const express = require("express");

// const app = express();

// const router = require("./routes");

// app.use(router);

// const port = 5000;

// app.listen(port, (req, res)=>{
//      console.log("app is running on port : ", port);
// })





// // Challenge- Create a Server with Middleware for Logging

// const express = require("express");
// const app = express();


// // custom logger

// const logger = (req, res, next) =>{
//      console.log(`${req.method} request made to ${req.url}`);
//      next();
// }

// app.use(logger);

// //get
// app.get("/products", (req, res)=>{
//       console.log("Here is the list of all products.");
// });

// //post products
// app.post("/products", (req, res)=>{
//      console.log("A new product has been added.");
// });

// //get categories
// app.get("/categories", (req, res)=>{
//      console.log("Here is the list of all categories.");
// });

// //post
// app.post("/categories", (req, res)=>{
//      console.log("A new category has been created.");
// });


// const port = 4000;

// app.listen(port, ()=>{
//      console.log("App is running on Port: ", port);
// })




// Question - dynamic routes

// const express = require("express");
// const app = express();

// app.get("/welcome/:username", (req, res)=>{
//      const username = req.params.username;
//      const role = req.query.role;

//      res.send(`Welcome ${username}, your role ${role}.`);
// })

// const port = 5000;

// app.listen(port, (req, res)=>{
//      console.log("app is running on port: ", port);
// })




// //routes
// app.get("/products", (req, res)=>{
//      res.send("Here is the list of all products.");
// });

// app.post("/products", (req, res)=>{
//      res.send("A new product has been added.");
// });

// app.get("/categories", (req, res)=>{
//      res.send("Here is the list of all categories.");
// });

// app.post("/categories", (req, res)=>{
//      res.send("A new category has been created.");
// });


// error routes


// app.use((req, res)=>{
//      res.status(404).send("<h1>404 - Page Not Found</h1>");
// });

// const port = 4000;

// app.listen(port, (req, res)=>{
//      console.log("app is running on port: ", port);
// })














// // Question-Routes
// const express = require("express");
// const app = express();

// //routes
// app.get("/orders", (req, res)=>{
//       res.send("Here is the list of all orders.");
// });

// app.post("/orders", (req, res)=>{
//      res.send("A new order has been created.");
// })

// app.get("/users", (req, res)=>{
//      res.send("Here is the list of all users.");
// });

// app.post("/users", (req, res)=>{
//      res.send("A new user has been added.");
// });

// const port = 3000;

// app.listen(port, ()=>{
//      console.log("App is running on Port: ", port);
// })












// its express with routes with custom midd

// const express = require("express");
// const app = express();

// //custom middleware

// function addUser(req, res, next){
//      req.user = "Guest";
//      next();
// }

// //Routes

// app.get("/welcome", addUser, (req, res)=>{
//      res.send(`<h1>Welcome ${req.user}</h1>`)
// })

// const port = 7777;

// app.listen(port, ()=>{
//     console.log("App is running on Port :", port);
// })








// const express = require("express");
// const app = express();

// const port = 5666;

// app.listen(port, ()=>{
//      console.log(`Server is up and running on Port ${port}! Ready to handle requests`);
// })
