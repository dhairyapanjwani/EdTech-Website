const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/default');

// const checkAuth = require('./middleware/check-auth');

mongoose.connect(`mongodb+srv://admin:${config.mpass}@cluster0.lodd5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
mongoose.Promise=global.Promise;


app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// To make uploads folder publically available with '/api/videos' route
//app.use('/api/videos', express.static('media/uploads'));

// // Routes
// app.use('/api/signIn', require('./routes/signIn'));
// app.use('/api/signUp', require('./routes/signUp'));
app.use('/api/upload', require('./routes/upload'));
//app.use('/api/videoList', require('./routes/videoList'));

module.exports = app;
