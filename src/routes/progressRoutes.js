import express from 'express';

import {
  getProgressByStudentCourse,
} from '../controllers/progressController.js';

const router = express.Router();

router.get('/progress/', getProgressByStudentCourse);

export default router;