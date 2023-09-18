// Variáveis
let offset = 0
let limit = 5


async function fetchPokemonLista() {

   let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

   await fetch(url)
      .then((response) => response.json())
      .then((jsonBody) => jsonBody.results)
      .then((pokemonLista) => fetchPokemonListaDetalhes(pokemonLista))

}


async function fetchPokemonListaDetalhes(pokeapi) {

   // A função map gera um Loop automático de acordo com a quantidade de itens dentro dele
   pokeapi.map((values) => {

      fetch(values.url)
         .then(response => response.json())
         .then(jsonBody => {
            cards.innerHTML += convertePokemonEmHTML(jsonBody)
         })

   })

}

// Chama a função principal da request dos pokemons
fetchPokemonLista()
