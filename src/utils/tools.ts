export function mockListPokemons() {
  return Array(20).fill({
    id: Math.floor(Math.random() * (20 - 1 + 1) + 1),
    name: 'Pokemon',
    url: 'url',
    img: 'img',
    types: [],
  });
}
