const pokemonContainer = document.getElementById("pokemon-container");

const fetchPokemon = async () => {
  try {
    // const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayPokemon = async () => {
  const pokemonData = await fetchPokemon();
  //   console.log(pokemonData);

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
  pokemonImg.src = pokemonData.sprites.front_default;
  pokemonImg.classList.add("mb-2");

  const pokemonName = document.createElement("h2");

  pokemonName.textContent =
    pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
  pokemonName.setAttribute("class", "text-xl font-bold text-gray-600");

  pokemonCard.appendChild(pokemonImg);
  pokemonCard.appendChild(pokemonName);

  pokemonContainer.appendChild(pokemonCard);
};

try {
  showLoadingSpinner();
  await displayPokemon(); // MUST wait for this to finish
  hideLoadingSpinner();
  console.log("All Pokemon have been loaded!");
} catch (error) {
  console.error("");
  showErrorMessage("");
}
