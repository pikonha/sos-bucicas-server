import { Router } from 'express';

import { getAnimals } from './services/index.js';

const router = new Router();

router.get('/animals', async (_, res) => {
  const animals = await getAnimals();

  res.json({ animals });
});

export default router;
