import Express from 'express';
import { config as dotenv } from 'dotenv';
import cors from 'cors'

import router from './router.js';

dotenv();

const app = Express();

app.use(cors())

app.use(router)

app.listen(3000, () => console.log('server bound to port 3000'));
