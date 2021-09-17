import { Animal } from '../database/models/index.js';

export default async function getAnimals({
  name, foundAt, status, location,
}) {
  const animal = await Animal.create({
    name, foundAt, status, location,
  });
  return animal;
}
