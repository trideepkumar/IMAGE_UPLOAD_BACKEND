// const multer = require('multer')
// const path = require('path')


//   const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "public");
//     },
//     filename: (req, file, cb) => {
//       const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//       const extension = file.mimetype.split("/")[1];
//       cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
//     },
//   });
  

//   const upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//       const filetypes = /jpeg|jpg|png|webp|mp4|mov|avi/;
//       const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//       const mimetype = filetypes.test(file.mimetype);
//       if (extname && mimetype) {
//         console.log('File is allowed');
//         return cb(null, true);
//       } else {
//         console.log('File is not allowed');
//         return cb(null, false);
//       }
//     }
//   });
  
// module.exports = {upload}