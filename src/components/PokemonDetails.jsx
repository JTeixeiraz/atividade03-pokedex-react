import { useEffect } from 'react'
import { corDoTipo, idFormatado, imagemOficial, ROTULOS_STATS } from '../data/pokedex'
import StatBar from './StatBar'
import TypeBadge from './TypeBadge'
import '../css/Modal.css'

export default function PokemonDetails({ pokemon, treinadores, onFechar }) {
  useEffect(() => {
    const aoTeclar = (e) => e.key === 'Escape' && onFechar()
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  }, [onFechar])

  const total = Object.values(pokemon.stats).reduce((a, b) => a + b, 0)
  const donos = treinadores.filter((t) => t.pokemonIds.includes(pokemon.id))

  return (
    <div className="modal-fundo" onClick={onFechar}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={pokemon.name}
        style={{ '--cor-tipo': corDoTipo(pokemon.types[0]?.name) }} onClick={(e) => e.stopPropagation()}>
        <button className="modal__fechar" onClick={onFechar} aria-label="Fechar">✕</button>
        <header className="modal__topo">
          <img src={imagemOficial(pokemon.id)} alt={pokemon.name} />
          <div>
            <small>{idFormatado(pokemon.id)}</small>
            <h2>{pokemon.name}</h2>
            <div className="modal__tipos">{pokemon.types.map((t) => <TypeBadge key={t.id} nome={t.name} />)}</div>
          </div>
        </header>
        <div className="modal__stats">
          {Object.entries(ROTULOS_STATS).map(([chave, rotulo]) => (
            <StatBar key={chave} rotulo={rotulo} valor={pokemon.stats[chave]} />
          ))}
          <p className="modal__total">Total: <strong>{total}</strong></p>
        </div>
        {donos.length > 0 && (
          <p className="modal__donos">Treinadores: {donos.map((d) => d.name).join(', ')}</p>
        )}
      </div>
    </div>
  )
}
