
const Student = require('../models/studentModel');

exports.showAllStudents =   async  ( req , res , next   )=> {
        const  result    =  await  Student.find();
        res.json({  studentData : result }) ;
}
