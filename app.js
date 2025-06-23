const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');



const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const studentRouter = require('./routes/studentRouter');


const app = express();
mongoose.connect('mongodb+srv://admin:admin123456@cluster0.yx9ljzx.mongodb.net/simple68')
                .then( console.log("เชื่อมต่อฐานข้อมูล สำเร็จ แล้วนะจ๊ะ ++ ++")   )



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use( '/students' , studentRouter );

module.exports = app;
