const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true // automatically removes spaces from beginning and the end
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
    type: String,
    enum: ["admin", "student"], //it will allow roles only which arte either studnet or admin not anything else 
    default: "student"
}
});

const User = mongoose.model("User", userSchema);

module.exports = User;