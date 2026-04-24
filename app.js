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
  const tipos = pokemon.types
    .map(t => t.type.name)
    .join(", ");

    card.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.sprites.front_default}">
    <p>Tipo: ${tipos}</p>
    <p>Peso: ${pokemon.weight}</p>
    <p>Altura: ${pokemon.height}</p>
  `;
  card.classList.remove("hidden");
} 

function mostrarLista(lista) {
  card.innerHTML = lista
    .slice(0, 10)
    .map(p => `<p>${p.pokemon.name}</p>`)
    .join("");

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