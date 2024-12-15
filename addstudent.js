const express = require('express');
const router = express.Router();
const studentModel = require('../models/user-model');  // Mengimpor model untuk berinteraksi dengan database

// Rute untuk menambah data mahasiswa
router.post('/addstudent', async (req, res) => {
  const { name, gmail, phone } = req.body;  // Ambil data nama, gmail, dan nomor dari body request

  // Validasi data yang diperlukan
  if (!name || !gmail || !phone) {
    return res.status(400).json({ message: 'All fields are required: name, gmail, phone' }); 
  }

  try {
    // Panggil fungsi dari model untuk menambah data
    const result = await studentModel.addStudent(name, gmail, phone);
    res.status(201).json({
      message: 'Student added successfully',
      studentId: result.insertId,  // Kembalikan ID mahasiswa yang baru ditambahkan
    });
  } catch (error) {
    res.status(500).json({ message: error.message }); // Tangani error
  }
});

// Untuk melakukan request POST dengan fetch
const fetch = require('node-fetch'); 
fetch('http://localhost:3000/addstudent', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: 'ujang abdul rohman',      // Tambahkan nama di sini
    gmail: 'ujanff@gmail.com@gmail.com',  // Tambahkan gmail di sini
    phone: '08783463624'  // Tambahkan nomor hp di sini
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

module.exports = router;
