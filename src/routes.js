import express from 'express';
import userRoutes from './routes/userRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import studyPlanRoutes from './routes/studyPlanRoutes.js';
import subjectRoutes from './routes/subjectRoutes.js'

const router = express.Router();

router.use('/api',
	userRoutes,
	courseRoutes,
	studyPlanRoutes,
	subjectRoutes,
);

router.get('/ping', (_req, res) => {
	res.status(200).json({ message: "I'm alive!" });
});

export default router;