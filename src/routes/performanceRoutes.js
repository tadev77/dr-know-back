import express from 'express';

import {
  getPerformanceByStudentCourse,
} from '../controllers/performanceController.js';

const router = express.Router();

router.get('/performances/', getPerformanceByStudentCourse);

export default router;