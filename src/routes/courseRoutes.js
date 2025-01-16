import express from 'express';

import {
  getCourseById,
} from '../controllers/courseController.js';

const router = express.Router();

router.get('/courses/:id', getCourseById);

export default router;