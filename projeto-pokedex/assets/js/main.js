const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;


function convertePokemonEmHTML(pokemon) {
   return `
            <div class="pokemon">
					<span class="numero">#001</span>
					<span class="titulo">${pokemon.name}</span>
					<div class="box">
						<ul class="pokemon-textos">
							<li class="tipo">Grass</li>
							<li class="tipo">Poison</li>
						</ul>
						<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name} ">
					</div>
				</div>`
}

let cards = document.getElementById('cards-pokemons')

// Faz a requisição
fetch(url)
   // criação de funções com Arrow Function
   .then((response) => response.json())         // recebe os dados pelo parametro response e converte em json.
   .then((jsonBody) => jsonBody.results)        // recebe os dados em json pelo parametro jsonBody e depois acessa o atributo results.
   .then((pokemonList) => {

      for (let i = 0; i < pokemonList.length; i++) {
         let poke = pokemonList[i];
         cards.innerHTML += convertePokemonEmHTML(poke)
      }

   })
   .catch((error) => console.error(error))