import { Animal } from '../database/models/index.js';

export default async function updateAnimalsById(id, updateData) {
  const animal = await Animal.findByIdAndUpdate({_id: id}, updateData)
  
  return animal;
}
