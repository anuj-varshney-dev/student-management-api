const Student = require("../models/studentModel");
async function getAllStudents(req, res) {
    try {
        const students = await Student.find();

        res.json(students);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

async function getStudentById(req, res) {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

async function createStudent(req, res) {
    try {
        const student = await Student.create(req.body);

        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
    console.log(req.user);
}

async function updateStudent(req, res) {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, // return the updated data/document without this it will return the old data
                runValidators: true // before updating check the schema rules
            }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

async function deleteStudent(req, res) {
     try {
        const student = await Student.findByIdAndDelete(req.params.id);
            
          if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);
    }catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};

//done