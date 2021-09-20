import { Animal } from '../database/models/index.js';

export default async function deleteAnimalsById(id) {
  const animal = await Animal.deleteOne({_id: id});
  return animal;
}
  