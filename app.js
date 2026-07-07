const express = require("express");
const studentRoutes = require("./routes/studentRoutes"); //router
const userRoutes = require("./routes/userRoutes"); //router
const app = express(); //main express application
app.use(express.json()); //middleware converts JSON into Javascript object and store in req.body 
app.use("/students", studentRoutes); 
app.use("/users", userRoutes);
app.get("/", (req, res) => {
    res.send("Hello Jarvis");
});
app.get("/about", (req, res) => {
    res.send("This is Student Management API");
});
module.exports = app;