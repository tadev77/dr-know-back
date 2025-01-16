import express from 'express';
import userRoutes from './routes/userRoutes.js';

const router = express.Router();

router.use('/api', userRoutes);

router.get('/ping', (_req, res) => {
	res.status(200).json({ message: "I'm alive!" });
});

export default router;