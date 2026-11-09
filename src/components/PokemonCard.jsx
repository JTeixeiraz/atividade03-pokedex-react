import { corDoTipo, idFormatado, imagemOficial } from '../data/pokedex'
import TypeBadge from './TypeBadge'
import '../css/PokemonCard.css'

export default function PokemonCard({ pokemon, favorito, onSelecionar, onFavoritar, selecionadoParaComparar, onComparar }) {
  const cor = corDoTipo(pokemon.types[0]?.name)
  return (
    <article className="pokemon-card" style={{ '--cor-tipo': cor }}>
      <button className={`pokemon-card__fav ${favorito ? 'ativo' : ''}`} onClick={() => onFavoritar(pokemon.id)}
        aria-label={favorito ? 'Remover dos favoritos' : 'Favoritar'}>★</button>
      <button className="pokemon-card__corpo" onClick={() => onSelecionar(pokemon)}>
        <span className="pokemon-card__id">{idFormatado(pokemon.id)}</span>
        <img src={imagemOficial(pokemon.id)} alt={pokemon.name} loading="lazy" />
        <h3>{pokemon.name}</h3>
        <div className="pokemon-card__tipos">
          {pokemon.types.map((t) => <TypeBadge key={t.id} nome={t.name} />)}
        </div>
        <dl className="pokemon-card__stats">
          <div><dt>HP</dt><dd>{pokemon.stats.hp}</dd></div>
          <div><dt>ATK</dt><dd>{pokemon.stats.attack}</dd></div>
          <div><dt>DEF</dt><dd>{pokemon.stats.defense}</dd></div>
          <div><dt>SP.A</dt><dd>{pokemon.stats.specialAttack}</dd></div>
          <div><dt>SP.D</dt><dd>{pokemon.stats.specialDefense}</dd></div>
          <div><dt>SPD</dt><dd>{pokemon.stats.speed}</dd></div>
        </dl>
      </button>
      <button className={`pokemon-card__cmp ${selecionadoParaComparar ? 'ativo' : ''}`} onClick={() => onComparar(pokemon.id)}>
        {selecionadoParaComparar ? '✓ Comparando' : '⚔ Comparar'}
      </button>
    </article>
  )
}
