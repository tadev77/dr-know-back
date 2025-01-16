import express from 'express';

import {
  getSubjectsByCourse,
} from '../controllers/subjectController.js';

const router = express.Router();

router.get('/subjects/', getSubjectsByCourse);

export default router;