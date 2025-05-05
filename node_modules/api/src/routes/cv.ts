import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const upload = multer({ dest: 'uploads/' });
const router = Router();

router.post('/', upload.single('cv'), (req, res) => {
  res.json({ filename: req.file?.filename });
});

router.get
('/', (req, res) => {
  const filePath = path.join(__dirname, '../../../uploads/cv.pdf');
  if (fs.existsSync(filePath)) res.download(filePath);
  else res.status(404).send('CV not found');
});

export default router;