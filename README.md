# ⚡ Pokédex React + Vite

Atividade 03 — Desenvolvimento e Integração de Aplicações Web (PUC Minas).
Pokédex interativa com pesquisa, filtro por tipo, detalhes, treinadores e extras.

## ▶️ Como executar

```bash
npm install
npm run dev
```

Abra **http://localhost:5173** no navegador. Build de produção: `npm run build`.

## ✨ Funcionalidades

- 151 Pokémon com ID, nome, tipos e os 6 atributos (HP, Attack, Defense, Sp. Atk, Sp. Def, Speed)
- 🔎 Pesquisa por **nome** ou **ID** (atualiza enquanto digita)
- 🧬 Filtro por tipo (tipos vindos do JSON)
- 📄 Modal de detalhes com barras de atributos (fecha com `Esc`)
- 🧑‍🚀 Aba de **Treinadores**: insígnias e Pokémon de cada um
- ⚠️ Estado de "nenhum Pokémon encontrado"
- Extras: ⭐ favoritos (persistidos), ⚔ comparação de dois Pokémon, 📊 ordenação, 🎲 aleatório, 🌙 tema claro/escuro, layout responsivo

## 📁 Dados e organização

- Dados: `src/data/pokedex-data.json` (acessados por `src/data/pokedex.js`)
- `src/components/` — `SearchBar`, `Filters`, `PokemonList`, `PokemonCard`, `PokemonDetails`, `Comparador`, `Treinadores`, `StatBar`, `TypeBadge`
- `src/css/` — um arquivo de estilo por componente + `App.css`
- `src/hooks/useLocalStorage.js` — persistência de favoritos e tema

## 🖼️ Fonte das imagens

Artworks oficiais da **PokéAPI Sprites** (`raw.githubusercontent.com/PokeAPI/sprites`), carregadas por ID. A aplicação continua funcionando sem as imagens, pois os dados vêm do JSON local.

## 👥 Autores

- João Pedro Teixeira Reis — [@JTeixeiraz](https://github.com/JTeixeiraz)
