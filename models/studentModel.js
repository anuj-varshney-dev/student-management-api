const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({ // think as it is creating rules describes what a student should look like
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 120
    }
});

 const Student = mongoose.model("Student", studentSchema); //this tells mongoose "Create a Model named Student that uses the studentSchema."The model provides methods like create(), find(), findById(), findByIdAndUpdate(), and findByIdAndDelete() to interact with the students collection in MongoDB."

module.exports = Student;