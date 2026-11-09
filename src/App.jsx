import { useMemo, useState } from 'react'
import { pokemons, tipos, treinadores } from './data/pokedex'
import { useLocalStorage } from './hooks/useLocalStorage'
import SearchBar from './components/SearchBar'
import Filters from './components/Filters'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'
import Comparador from './components/Comparador'
import Treinadores from './components/Treinadores'
import './css/App.css'

const normalizar = (s) => s.trim().toLowerCase()

export default function App() {
  const [aba, setAba] = useState('pokedex')
  const [busca, setBusca] = useState('')
  const [tipo, setTipo] = useState('')
  const [ordem, setOrdem] = useState('id')
  const [apenasFavoritos, setApenasFavoritos] = useState(false)
  const [favoritos, setFavoritos] = useLocalStorage('pokedex:favoritos', [])
  const [tema, setTema] = useLocalStorage('pokedex:tema', 'escuro')
  const [selecionado, setSelecionado] = useState(null)
  const [comparando, setComparando] = useState([])

  // estado derivado: lista filtrada e ordenada
  const visiveis = useMemo(() => {
    const termo = normalizar(busca).replace(/^#/, '')
    const lista = pokemons.filter((p) => {
      const numerico = /^\d+$/.test(termo)
      const casaBusca = !termo || (numerico ? p.id === Number(termo) : p.name.toLowerCase().includes(termo))
      const casaTipo = !tipo || p.types.some((t) => t.name === tipo)
      const casaFav = !apenasFavoritos || favoritos.includes(p.id)
      return casaBusca && casaTipo && casaFav
    })
    return [...lista].sort((a, b) => {
      if (ordem === 'id') return a.id - b.id
      if (ordem === 'name') return a.name.localeCompare(b.name)
      return b.stats[ordem] - a.stats[ordem]
    })
  }, [busca, tipo, ordem, apenasFavoritos, favoritos])

  const alternarFavorito = (id) =>
    setFavoritos((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]))

  const alternarComparacao = (id) =>
    setComparando((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id].slice(-2)))

  const aleatorio = () => setSelecionado(pokemons[Math.floor(Math.random() * pokemons.length)])

  const [a, b] = comparando.map((id) => pokemons.find((p) => p.id === id))

  return (
    <div className="app" data-tema={tema}>
      <header className="app__topo">
        <h1>⚡ Pokédex</h1>
        <nav>
          <button className={aba === 'pokedex' ? 'ativo' : ''} onClick={() => setAba('pokedex')}>Pokémon</button>
          <button className={aba === 'treinadores' ? 'ativo' : ''} onClick={() => setAba('treinadores')}>Treinadores</button>
          <button onClick={() => setTema(tema === 'escuro' ? 'claro' : 'escuro')} aria-label="Alternar tema">
            {tema === 'escuro' ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>
      <main className="app__conteudo">
        {aba === 'pokedex' ? (
          <>
            <div className="app__controles">
              <SearchBar valor={busca} onChange={setBusca} />
              <Filters tipos={tipos} tipo={tipo} onTipo={setTipo} ordem={ordem} onOrdem={setOrdem}
                onAleatorio={aleatorio} apenasFavoritos={apenasFavoritos} onFavoritos={() => setApenasFavoritos((v) => !v)} />
            </div>
            {a && <Comparador a={a} b={b} onLimpar={() => setComparando([])} />}
            <p className="app__contagem">{visiveis.length} Pokémon</p>
            <PokemonList pokemons={visiveis} favoritos={favoritos} comparando={comparando}
              onSelecionar={setSelecionado} onFavoritar={alternarFavorito} onComparar={alternarComparacao} />
          </>
        ) : (
          <Treinadores treinadores={treinadores} pokemons={pokemons} onSelecionar={setSelecionado} />
        )}
      </main>
      {selecionado && (
        <PokemonDetails pokemon={selecionado} treinadores={treinadores} onFechar={() => setSelecionado(null)} />
      )}
    </div>
  )
}
