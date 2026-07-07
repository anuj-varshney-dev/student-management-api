require("dotenv").config(); //This loads the dotenv package from node_modules. and config() does this Read the .env file and load all its variables into process.env
const app = require("./app"); //Now app in server.js is the same Express app that was created in app.js.
const connectDB = require("./config/db");
connectDB(); //application connects to mongodb
const PORT = 3000;
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});