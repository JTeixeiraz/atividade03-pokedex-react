import '../css/StatBar.css'

const MAXIMO = 255

export default function StatBar({ rotulo, valor }) {
  const pct = Math.min(100, (valor / MAXIMO) * 100)
  return (
    <div className="stat-bar">
      <span className="stat-bar__label">{rotulo}</span>
      <span className="stat-bar__valor">{valor}</span>
      <div className="stat-bar__trilho" role="progressbar" aria-valuenow={valor} aria-valuemax={MAXIMO} aria-label={rotulo}>
        <div className="stat-bar__preenchimento" style={{ width: `${pct}%`, filter: `hue-rotate(${pct * 1.2}deg)` }} />
      </div>
    </div>
  )
}
