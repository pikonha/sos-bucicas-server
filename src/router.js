import { Router } from 'express';

import { getAnimals, createAnimals } from './services/index.js';

const router = new Router();

router.get('/animals', async (_, res) => {
  const animals = await getAnimals();

  res.json({ animals });
});

router.post('/animals', async (req, res) => {
  const {
    name, foundAt, status, location,
  } = req.body;

  const animal = await createAnimals({
    name, foundAt, status, location,
  });

  res.json({ animal });
});

export default router;
