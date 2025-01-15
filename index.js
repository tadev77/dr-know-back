import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './src/routes.js';

dotenv.config();
import('./src/config/knex.js')

const app = express();
app.use(bodyParser.json());
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});