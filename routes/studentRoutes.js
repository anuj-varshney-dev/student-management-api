const express = require("express");
const authMiddleware = require("../middleware/authMiddleware"); //bring middleware fxns from their files
const adminMiddleware = require("../middleware/adminMiddleware"); //same above 
const {
    getAllStudents,
    getStudentById,
    createStudent,    // object destructing 
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");
const router = express.Router(); //mini express app resposible only for student routes
router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", authMiddleware, adminMiddleware, createStudent); //left to right it it gets verified 
router.put("/:id", authMiddleware, adminMiddleware, updateStudent);
router.delete("/:id", authMiddleware, adminMiddleware, deleteStudent);
module.exports = router;