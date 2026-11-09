import dados from './pokedex-data.json'

export const pokemons = dados.pokemon
export const tipos = dados.types.filter((t) => t.name !== 'Typeless')
export const treinadores = dados.trainers

export const imagemOficial = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

export const ROTULOS_STATS = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  specialAttack: 'Sp. Atk',
  specialDefense: 'Sp. Def',
  speed: 'Speed',
}

export const COR_TIPO = {
  Normal: '#a8a77a', Fire: '#ee8130', Water: '#6390f0', Grass: '#7ac74c', Electric: '#f7d02c',
  Ice: '#96d9d6', Fighting: '#c22e28', Poison: '#a33ea1', Ground: '#e2bf65', Flying: '#a98ff3',
  Psychic: '#f95587', Bug: '#a6b91a', Rock: '#b6a136', Ghost: '#735797', Dragon: '#6f35fc',
  Dark: '#705746', Steel: '#b7b7ce', Fairy: '#d685ad',
}

export const corDoTipo = (nome) => COR_TIPO[nome] ?? '#888'
export const idFormatado = (id) => `#${String(id).padStart(3, '0')}`
