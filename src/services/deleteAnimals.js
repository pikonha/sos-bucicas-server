import { Animal } from '../database/models/index.js';

export default async function deleteAnimalsById(id) {
  const animal = await Animal.findByIdAndDelete({_id: id});
  return animal;
}
  