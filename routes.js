// // Crud implementation in Express

// const express = require("express");
// const router = express.Router();

// // Students Data

// const students = [

// { id: 1, name: "Alice" },

// { id: 2, name: "Bob" },

// { id: 3, name: "Charlie" }

// ];

// // Courses Data

// const courses = [

// { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

// { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

// ];


// router.get("/", (req, res)=>{
//     res.send("Welcome to the Student & Course Portal API!");
// });

// router.get("/students", (req, res)=>{
//      const names = students.map((stu)=> stu.name);
//      res.send(`Courses:${names}`);
// });

// router.get("/students/:id", (req, res)=>{
//      const id = Number(req.params.id);
//      const student = students.find((stu)=> stu.id === id);

//      if(!student) res.status(404).send("Student not found");

//     //  res.json(student);
//     res.send(`Student:${student.name}`);
// });

// //courses

// router.get("/courses", (req, res)=>{
//      const course = courses.map((course)=> course.name);
//      res.send(`Courses:${course}`);
// });

// router.get("/courses/:id", (req,res)=>{
//    const id = Number(req.params.id);

//    const course = courses.find((cour)=> cour.id === id);

//    if(!course) res.status(404).send("Course not found");

// //    res.json(course);
//      res.send(`Course:${course.name}, Description:${course.description}`);
// })

// module.exports = router;








// // // Build Your Own Library System with Express.js!

// // const express = require("express");
// // const router = express.Router();

// // //get

// // router.get("/books", (req, res)=>{
// //     res.send("Here is the list of books!");
// // })


// // //post

// // router.post("/books", (req, res)=>{
// //     res.send("Book has been added!");
// // })


// // module.exports = router;












// // const express = require("express");

// // const router = express.Router();

// // // GET /products
// // router.get("/products", (req, res) => {
// //     res.send("Here is the list of all products.");
// // });

// // // POST 
// // router.post("/products", (req, res) => {
// //     res.send("A new product has been added.");
// // });


// // // GET /categories
// // router.get("/categories", (req, res) => {
// //     res.send("Here is the list of all categories.");
// // });


// // // POST 
// // router.post("/categories", (req, res) => {
// //     res.send("A new category has been created.");
// // });

// // module.exports = router;