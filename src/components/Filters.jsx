import '../css/Filters.css'

export default function Filters({ tipos, tipo, onTipo, ordem, onOrdem, onAleatorio, apenasFavoritos, onFavoritos }) {
  return (
    <div className="filters">
      <select value={tipo} onChange={(e) => onTipo(e.target.value)} aria-label="Filtrar por tipo">
        <option value="">Todos os tipos</option>
        {tipos.map((t) => (
          <option key={t.id} value={t.name}>{t.name}</option>
        ))}
      </select>
      <select value={ordem} onChange={(e) => onOrdem(e.target.value)} aria-label="Ordenar">
        <option value="id">Ordenar: ID</option>
        <option value="name">Ordenar: Nome</option>
        <option value="hp">Ordenar: HP</option>
        <option value="attack">Ordenar: Attack</option>
        <option value="defense">Ordenar: Defense</option>
        <option value="specialAttack">Ordenar: Special Attack</option>
        <option value="specialDefense">Ordenar: Special Defense</option>
        <option value="speed">Ordenar: Speed</option>
      </select>
      <button className={apenasFavoritos ? 'ativo' : ''} onClick={onFavoritos}>★ Favoritos</button>
      <button onClick={onAleatorio}>🎲 Aleatório</button>
    </div>
  )
}
