
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/user-controller');

router.get('/', studentController.getAllStudents); 
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.addStudent);
router.post('/addstudent', studentController.addStudent);

module.exports = router;
