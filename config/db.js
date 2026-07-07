const mongoose = require("mongoose");

async function connectDB() { //creates a fxn that will connect to mongo db 
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected Successfully");
    } catch (err) {
        console.log("MongoDB Connection Failed");
        console.log(err);
    }
}

module.exports = connectDB;