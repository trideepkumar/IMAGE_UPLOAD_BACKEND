const User = require('../model/user')

const uploadImage = async (req, res) => {
console.log('hi')
console.log(req.files);
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }
    console.log(req.body)
    const { filename } = req.file;

    const path = req.file.path.slice(7);
    const filepath = `http://localhost:${process.env.PORT}/${path}`;
  
    const user = new User({
      image: filepath,
    });
  
    try {
      await user.save();
      return res.json({
        message: 'Image uploaded successfully',
        filename,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Failed to save image URL' });
    }
  };
  
  


  exports.uploadImage = uploadImage;
