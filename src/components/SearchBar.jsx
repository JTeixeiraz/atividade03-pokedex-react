import '../css/SearchBar.css'

export default function SearchBar({ valor, onChange }) {
  return (
    <input
      className="search-bar"
      type="search"
      placeholder="Pesquisar Pokémon por nome ou ID..."
      value={valor}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Pesquisar Pokémon"
    />
  )
}
