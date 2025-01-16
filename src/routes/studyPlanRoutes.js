import express from 'express';

import {
  getStudyPlans,
  createStudentStudyPlan
} from '../controllers/studyPlansController.js';

const router = express.Router();

router.get('/study_plans/', getStudyPlans);
router.post('/student_study_plans/', createStudentStudyPlan);

export default router;