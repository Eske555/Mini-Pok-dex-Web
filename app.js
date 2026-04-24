const input = document.getElementById("pokemonInput");
const button = document.getElementById("searchBtn");
const card = document.getElementById("pokemonCard");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

button.addEventListener("click", buscarPokemon);

async function buscarPokemon() {
  const nombre = input.value.toLowerCase().trim();

  if (!nombre) {
    mostrarError("Ingresá un nombre válido");
    return;
  }

  limpiarUI();
  loading.classList.remove("hidden");

  try {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

    if (res.ok) {
      const data = await res.json();
      mostrarPokemon(data);
      return;
    }

    res = await fetch(`https://pokeapi.co/api/v2/type/${nombre}`);

    if (!res.ok) throw new Error("No encontrado");

    const data = await res.json();
    mostrarLista(data.pokemon);

  } catch (err) {
    mostrarError("Pokémon o tipo no encontrado");
  } finally {
    loading.classList.add("hidden");
  }
}

function mostrarPokemon(pokemon) {
  const tipos = pokemon.types.map(t => t.type.name);

  document.body.className = tipos[0];

  const tiposHTML = tipos
    .map(t => `<span class="tipo ${t}">${t}</span>`)
    .join("");

  const stats = pokemon.stats.map(stat => {
    return `
      <div class="stat">
        <span>${stat.stat.name}</span>
        <div class="barra">
          <div class="progreso" style="width:${stat.base_stat}%"></div>
        </div>
      </div>
    `;
  }).join("");

  card.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.sprites.front_default}">
    <div>${tiposHTML}</div>
    <p>Peso: ${pokemon.weight}</p>
    <p>Altura: ${pokemon.height}</p>

    <h3>Stats</h3>
    ${stats}
  `;

  card.classList.remove("hidden");
  card.style.animation = "aparecer 0.5s ease";
} 

function mostrarLista(lista) {
  card.innerHTML = `
    <div class="grid">
      ${lista.slice(0, 12).map(p => `
        <div class="mini-card">
          ${p.pokemon.name}
        </div>
      `).join("")}
    </div>
  `;

  card.classList.remove("hidden");
}

function mostrarError(msg) {
  error.textContent = msg;
  error.classList.remove("hidden");
}
function limpiarUI() {
  card.innerHTML = "";
  card.classList.add("hidden");
  error.classList.add("hidden");
}