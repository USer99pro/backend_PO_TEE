
const Student = require('../models/studentModel');

exports.showAllStudents =   async  ( req , res , next   )=> {
        const  result    =  await  Student.find();
        res.json({  studentData : result }) ;
}


exports.showStudentsByID =  async (req , res, next) =>{
        const {id} = req.params;
        const std = await Student.findById(id)
        res.json({ data:std})
}

exports.InsertStudent =  async (req , res, next) =>{
        const { name, age, sex, email} = req.body;
        const std = new Student
            std.name = name,
            std.age = age,
            std.sex =  sex,
            std.email =  email
            await std.save()

            res.json({ message: "Student added successfully", student: std });



}