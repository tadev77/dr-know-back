import express from 'express';

import {
  getStudyPlans,
} from '../controllers/studyPlansController.js';

const router = express.Router();

router.get('/study_plans/', getStudyPlans);

export default router;