const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');

const user = require('./router/user')




const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'x-access-token']
  };



require('dotenv').config();
const app = express();

// app.use(fileupload({ useTempFiles: true, tempFileDir: '/temp/' }));

const uploadDir = '/path/to/existing/directory';

// Enable file uploads
app.use(fileupload({
  createParentPath: true,
  tempFileDir: uploadDir,
}));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors(corsOptions));

app.use(express.json());



app.use('/', user);




mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(process.env.PORT,console.log(process.env.PORT));
    
    console.log('mongoose connected successfully!');
  })
  .catch((err) => {
    console.log(err);
  });