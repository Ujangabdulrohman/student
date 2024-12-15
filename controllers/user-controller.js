const studentModel = require('../models/user-model');


const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.getAllStudents(); 
    res.status(200).json(students); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};
const getStudentById = async (req, res) => { 
  const { id } = req.params; 
  try {
    const student = await studentModel.getStudentById(id); 
    if (!student) {
      return res.status(404).json({ message: 'Student not found' }); 
    }
    res.status(200).json(student); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};


const addStudent = async (req, res) => {
  const { name,  gmail, phone } = req.body; 
  try {
    const result = await studentModel.addStudent(name, gmail, phone); 
    res.status(201).json({ message: 'Student added successfully', studentId: result.insertId });
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

module.exports = { getAllStudents, getStudentById, addStudent };
