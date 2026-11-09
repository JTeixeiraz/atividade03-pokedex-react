import { corDoTipo } from '../data/pokedex'
import '../css/TypeBadge.css'

export default function TypeBadge({ nome }) {
  return (
    <span className="type-badge" style={{ background: corDoTipo(nome) }}>
      {nome}
    </span>
  )
}
