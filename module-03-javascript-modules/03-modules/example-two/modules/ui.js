const pokemonContainer = document.getElementById("pokemon-container");

function displayPokemon(pokemon) {
  const pokemonCard = document.createElement("div");

  pokemonCard.classList.add(
    "shadow-md",
    "p-4",
    "m-2",
    "flex",
    "flex-col",
    "items-center"
  );

  const pokemonImg = document.createElement("img");
  pokemonImg.src = pokemon.sprites.front_default;
  pokemonImg.classList.add("mb-2");

  const pokemonName = document.createElement("h2");
  pokemonName.textContent =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  pokemonName.setAttribute("class", "text-xl font-bold text-gray-600");

  pokemonCard.appendChild(pokemonImg);
  pokemonCard.appendChild(pokemonName);

  pokemonContainer.appendChild(pokemonCard);
}

export { displayPokemon }; // This is what we call a named export. Basically the opposite of 'default exports'

/*
Why didn't we decide on a default export here?
Because I expect to create more functions to do some DOM manipulation here.
Basically anticipating what I might need for the future and being ready for it.
*/
