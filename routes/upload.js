const express = require('express')
const multer  = require('multer')
const router=express.Router();
//const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, "photo" + '-' + uniqueSuffix+'.'+extension);
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/file',upload.single('profile'),(req,res)=>{
    
   let user={
    profile:req.file.fieldname,
   }
   res.send(user);
})
module.exports=router;