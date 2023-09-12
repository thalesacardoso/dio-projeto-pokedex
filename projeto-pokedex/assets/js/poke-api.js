
// Função que faz a requisição dos dados pela API
let pokeAPI = (offset = 0, limit = 10) => {
   const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

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
      .catch((error) => console.log(error))
}

// Chamada da função
pokeAPI();