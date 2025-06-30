
const express = require('express');
const router  = express.Router();
const studentController = require('../controllers/studentController');

router.get( '/'   ,  studentController.showAllStudents   );
router.get('/:id' , studentController.showStudentsByID)

module.exports = router;