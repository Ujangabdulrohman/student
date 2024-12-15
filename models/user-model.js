
const db = require("../config/db");

const getAllStudents = async () => { 
  const [rows] = await db.query("SELECT * FROM siswa");
  return rows;
};
const getStudentById = async (id) => {
  const [rows] = await db.query("SELECT * FROM siswa WHERE id = ?", [id]); 
  return rows[0];
};

const addStudent = async (name,  gmail, phone) => { 
  const [result] = await db.query("INSERT INTO siswa (name, gmail, phone) VALUES (?, ?, ?)", [name, gmail, phone]);
  return result;
};
module.exports = { getAllStudents, getStudentById, addStudent };  
