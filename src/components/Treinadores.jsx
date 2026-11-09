import { imagemOficial } from '../data/pokedex'
import '../css/Treinadores.css'

export default function Treinadores({ treinadores, pokemons, onSelecionar }) {
  const porId = new Map(pokemons.map((p) => [p.id, p]))
  return (
    <section className="treinadores">
      {treinadores.map((t) => (
        <article key={t.id} className="treinador">
          <header>
            <h3>🧑‍🚀 {t.name}</h3>
            <span>🏅 {t.badges} {t.badges === 1 ? 'insígnia' : 'insígnias'}</span>
          </header>
          <div className="treinador__time">
            {t.pokemonIds.map((id) => porId.get(id)).filter(Boolean).map((p) => (
              <button key={p.id} title={p.name} onClick={() => onSelecionar(p)}>
                <img src={imagemOficial(p.id)} alt={p.name} loading="lazy" />
                <small>{p.name}</small>
              </button>
            ))}
            {t.pokemonIds.length === 0 && <small>Sem Pokémon registrados.</small>}
          </div>
        </article>
      ))}
    </section>
  )
}
