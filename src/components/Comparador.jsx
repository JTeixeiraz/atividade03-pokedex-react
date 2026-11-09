import { idFormatado, imagemOficial, ROTULOS_STATS } from '../data/pokedex'
import '../css/Comparador.css'

export default function Comparador({ a, b, onLimpar }) {
  return (
    <section className="comparador">
      <header>
        <h3>⚔ Comparação</h3>
        <button onClick={onLimpar}>Limpar</button>
      </header>
      {!b && <p>Selecione mais um Pokémon para comparar com <strong>{a.name}</strong>.</p>}
      <div className="comparador__grade">
        {[a, b].filter(Boolean).map((p) => (
          <div key={p.id} className="comparador__col">
            <img src={imagemOficial(p.id)} alt={p.name} />
            <strong>{idFormatado(p.id)} {p.name}</strong>
          </div>
        ))}
      </div>
      {b && (
        <table>
          <tbody>
            {Object.entries(ROTULOS_STATS).map(([k, rotulo]) => (
              <tr key={k}>
                <td className={a.stats[k] > b.stats[k] ? 'vence' : ''}>{a.stats[k]}</td>
                <th>{rotulo}</th>
                <td className={b.stats[k] > a.stats[k] ? 'vence' : ''}>{b.stats[k]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}
