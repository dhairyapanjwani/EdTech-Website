const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/default');

// const checkAuth = require('./middleware/check-auth');

mongoose.connect(`mongodb+srv://admin:${config.mpass}@cluster0.lodd5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
);
mongoose.Promise=global.Promise;

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// To make uploads folder publically available with '/api/videos' route
app.use('/api/uploads/videos', express.static('uploads/videos'));
app.use('/api/uploads/thumbnails', express.static('uploads/thumbnails'));
app.use('/api/uploads/attachments', express.static('uploads/attachments'));
app.use('/api/uploads/cover', express.static('uploads/cover'));
app.use('/api/uploads/profile', express.static('uploads/profile'));

// // Routes

app.use('/api/signUp', require('./routes/signUp'));
app.use('/api/auth/confirm',require('./routes/confirmCode'));
app.use('/api/v1/auth/google',require('./routes/authApi'));
app.use('/api/signIn', require('./routes/signIn'));
app.use('/api/course', require('./routes/course'));

app.use('/api/uploadvideo', require('./routes/uploadVideo'));
app.use('/api/video', require('./routes/video'));
app.use('/api/user', require('./routes/user'));
app.use('/api/payment',require('./routes/payment'));
app.use('/api/quiz',require('./routes/quiz'));
app.use('/api/authapi',require('./routes/authApi'));
app.use('/api/uploadcourse',require('./routes/uploadCourse'));

module.exports = app;
