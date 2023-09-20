// Variáveis
let offset = 0;
let limit = 5;
let limiteMaximo = 50;

// Função principal responsável por fazer a chamada da API
async function fetchPokemonLista() {

   if (limit <= limiteMaximo) {

      // O loop é responsável por gerar os números da ID final da requisição
      for (let i = offset + 1; i <= limit; i++) {

         await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
            .then(dados => {
               cards.innerHTML += convertePokemonEmHTML(dados)
            })

      }

   } else {
      offset += 0
      limit += 0
   }
}

// Chama a função principal da request dos pokemons
fetchPokemonLista()