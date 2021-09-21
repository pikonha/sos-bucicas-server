import { Router } from 'express';
import {
  celebrate, Joi, Segments,
} from 'celebrate';

import { getAnimals, createAnimals, deleteAnimals, updateAnimals } from './services/index.js';

const router = new Router();

router.get('/animals',
  celebrate({
    [Segments.QUERY]: {
      name: Joi.string(),
      foundAt: Joi.date(),
      status: Joi.string(),
      location: Joi.string(),
    },
  }),
  async (_, res) => {
    const animals = await getAnimals();

    res.json({ animals });
  });

router.post('/animals',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      foundAt: Joi.date().required(),
      status: Joi.string().required(),
      location: Joi.string().required(),
    }),
  }),
  async (req, res) => {
    const {
      name, foundAt, status, location,
    } = req.body;

    const animal = await createAnimals({
      name, foundAt, status, location,
    });

    res.json({ animal });
  });

router.delete('/animals/:id',
  async(req, res) => {
    const id = req.params.id;
    const animal= await deleteAnimals(id);

    res.json({ animal });
  });

router.post('/animals/:id',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string(),
      foundAt: Joi.date(),
      status: Joi.string(),
      location: Joi.string(),
    }),
  }),
  async(req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    const animal = await updateAnimals(id, updateData);

    res.json({ animal })
  });

export default router;
