import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '..', '..', '..', '..', 'uploads'))
  },

  filename: (req, file, cb) => {
    const uniqueSulfix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, file.originalname + '-' + uniqueSulfix)
  }
})

export const multerConfig = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    switch (path.extname(file.originalname)) {
      case '.png':
      case '.JPG':
      case '.gif':
        cb(null, true)
        break
      default:
        cb(new Error('Only images allowed'))
    }
  }
})
