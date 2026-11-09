import PokemonCard from './PokemonCard'
import '../css/PokemonList.css'

export default function PokemonList({ pokemons, favoritos, comparando, onSelecionar, onFavoritar, onComparar }) {
  if (pokemons.length === 0) {
    return (
      <div className="pokemon-list__vazio">
        <p>😢 Nenhum Pokémon encontrado.</p>
        <small>Tente outro nome, ID ou tipo.</small>
      </div>
    )
  }
  return (
    <section className="pokemon-list">
      {pokemons.map((p) => (
        <PokemonCard key={p.id} pokemon={p} favorito={favoritos.includes(p.id)}
          selecionadoParaComparar={comparando.includes(p.id)}
          onSelecionar={onSelecionar} onFavoritar={onFavoritar} onComparar={onComparar} />
      ))}
    </section>
  )
}
