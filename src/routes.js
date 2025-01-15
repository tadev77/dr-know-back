import express from 'express';

const router = express.Router();

router.get('/ping', (_req, res) => {
	res.status(200).json({ message: "I'm alive!" });
});

export default router;