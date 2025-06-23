
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String  ,
    age: Number,
    sex: String,
    email: String
});

    const student  =  mongoose.model('students', studentSchema);
    module.exports = student ;