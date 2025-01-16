import express from 'express';
import { completion } from "./services/openIa.js";

const router = express.Router();

router.get('/completions', async (_req, res) => {
	const response = await completion();
	const responseObject = JSON.parse(response);

	res.json(responseObject);
});

export default router;