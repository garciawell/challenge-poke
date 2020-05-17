import { uuid } from 'uuidv4';

export function mockListPokemons() {
  return Array.from({ length: 20 }, () => ({
    id: uuid(),
    name: 'Pokemon',
    url: 'url',
    img: 'img',
    types: [],
    stats: [],
    abilities: [],
  }));
}
