const express = require('express');
const router =  express.Router();
const { upload } = require('../middlewares/multer');
const { uploadImage } = require('../controllers/userController');



router.post('/',upload.single('image'), uploadImage);




module.exports = router;
