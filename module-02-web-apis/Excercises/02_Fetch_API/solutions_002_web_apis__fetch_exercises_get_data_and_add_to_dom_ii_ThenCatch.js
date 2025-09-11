// You can work here or download the template
const pokemonContainer = document.getElementById('pokemon-container');

// Function to fetch data for a specific Pokémon by ID
function fetchPokemon(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(`Error fetching Pokémon with ID ${id}:`, error);
      return null; // Return null on error so we can check for it later
    });
}

// Function to create a Pokémon card element
function createPokemonCard(pokemon) {
  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add(
    'bg-white',
    'rounded-lg',
    'shadow-md',
    'p-4',
    'flex',
    'flex-col',
    'items-center',
    'text-center'
  );

  const pokemonImage = document.createElement('img');
  pokemonImage.src = pokemon.sprites.front_default;
  pokemonImage.alt = pokemon.name;
  pokemonImage.classList.add('mb-4');

  const pokemonName = document.createElement('h2');
  pokemonName.textContent =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  pokemonName.classList.add('text-xl', 'font-bold', 'mb-2');

  const pokemonInfo = document.createElement('p');
  pokemonInfo.textContent = `ID: ${pokemon.id} | Type: ${pokemon.types
    .map((typeInfo) => typeInfo.type.name)
    .join(', ')}`;
  pokemonInfo.classList.add('text-gray-600');

  pokemonCard.appendChild(pokemonImage);
  pokemonCard.appendChild(pokemonName);
  pokemonCard.appendChild(pokemonInfo);

  return pokemonCard;
}

// Function to display Pokémon cards in the DOM
function displayPokemons() {
  // Create an array of promises for all 150 Pokémon
  const pokemonPromises = [];
  for (let i = 1; i <= 150; i++) {
    pokemonPromises.push(fetchPokemon(i));
  }

  // Wait for all promises to resolve
  Promise.all(pokemonPromises)
    .then((pokemons) => {
      // Filter out any null values (failed requests)
      pokemons
        .filter((pokemon) => pokemon !== null)
        .forEach((pokemon) => {
          const card = createPokemonCard(pokemon);
          pokemonContainer.appendChild(card);
        });
    })
    .catch((error) => {
      console.error('Error fetching Pokémon data:', error);
    });
}

// function displayPokemonsSimple() {
//   function loadPokemon(id) {
//     if (id > 150) return; // Base case

//     fetchPokemon(id)
//       .then(pokemon => {
//         if (pokemon) {
//           const card = createPokemonCard(pokemon);
//           pokemonContainer.appendChild(card);
//         }
//         // Load the next Pokémon
//         loadPokemon(id + 1);
//       });
//   }

//   // Start loading from ID 1
//   loadPokemon(1);
// }

// Alternative: Sequential loading (like the original async/await version)
function displayPokemonsSequential() {
  // This approach loads Pokémon one by one
  let promise = Promise.resolve();

  for (let i = 1; i <= 150; i++) {
    promise = promise.then(() => {
      return fetchPokemon(i).then((pokemon) => {
        if (pokemon) {
          const card = createPokemonCard(pokemon);
          pokemonContainer.appendChild(card);
        }
      });
    });
  }

  promise.catch((error) => {
    console.error('Error in sequential loading:', error);
  });
}

// Fetch and display Pokémon on page load
// Use displayPokemons() for parallel loading (faster)
// Use displayPokemonsSequential() for sequential loading (like the original)
displayPokemons();

function displayPokemonsSimple() {
  function loadPokemon(id) {
    if (id > 150) return; // Base case

    fetchPokemon(id).then((pokemon) => {
      if (pokemon) {
        const card = createPokemonCard(pokemon);
        pokemonContainer.appendChild(card);
      }
      // Load the next Pokémon
      loadPokemon(id + 1);
    });
  }

  // Start loading from ID 1
  loadPokemon(1);
}
