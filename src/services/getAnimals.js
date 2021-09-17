import { Animal } from '../database/models/index.js';

export default async function getAnimals() {
  return Animal.find();
}
