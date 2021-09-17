import Express from 'express';
import { config as dotenv } from 'dotenv';
import cors from 'cors';
import { errors } from 'celebrate';

import router from './router.js';
import db from './database/index.js';

(async () => {
  dotenv();

  await db.connect();
  const app = Express();

  app.use(Express.json());
  app.use(cors());
  app.use(router);
  app.use(errors());

  app.listen(3000, () => console.log('server bound to port 3000'));
})();
