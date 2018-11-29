const express = require("express");
const StudentModel = require('../models/student');

const router = express.Router();


router.get('', (req, res, next) => {

  console.log('GET: Student lists');

  // Add Mongoose query to find all return list of students and return

});

router.get('/:id', (req, res, next) => {

  console.log('GET: Student by id:' + req.params.id);

  // Implement Mongoose query to find Student by Id return list of students and return

})

router.put('/:id', (req, res, next) => {

  console.log('UPDATE: Student by id: ' + req.params.id);

  // Implement Mongoose update Student by ID

})
router.post('/:id', (req, res, next) => {

  console.log('UPDATE: Student by id: ' + req.params.id);

  // Implement Mongoose update Student by ID

})

router.delete('/:id', (req, res, next) => {

  console.log('UPDATE: Student by id: ' + req.params.id);

  // Implement Mongoose delete one Student by ID

});

module.exports = router;
